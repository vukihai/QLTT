<?php
/*
*   file này nhận request được rewrite từ dạng /{APIquery} thành /api.php/{APIquery}.
*   gọi Routing::proc() để xác định controller và định tuyến APIquery về đúng controller.
*
*/

require_once("core/control/routing.php");
require_once("core/abstract/NodeController.php");
require_once("./authentication/auth.php");

//set múi giờ để xác định ngày giờ cho token
date_default_timezone_set('Asia/Ho_Chi_Minh');

$auth = new \authentication\Auth;
$auth->proc();

$controller = \api\core\control\routing::proc();

// xử lý trường hợp không tìm thấy controller
if(!file_exists($controller['controllerPath'])) {
    header("HTTP/1.1 " . 404 . " " . "not found!");
    header("Content-Type: application/json");   
    echo json_encode(array("error" => "node not found!"));
    die();
}

// tạo và chạy controller.
require_once($controller['controllerPath']);
$controller = new $controller['controllerName'] ($controller['nodeIds']);
if(!$controller instanceof NodeController) {
    header("HTTP/1.1 " . 404 . " " . "not found!");
    header("Content-Type: application/json");   
    echo json_encode(array("error" => "controller not found!"));
    die();
}
$controller->proc();

$controller = null;