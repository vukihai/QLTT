<?php
/*
*   file này nhận request được rewrite từ dạng /{APIquery} thành /api.php/{APIquery}.
*   gọi Routing::proc() để xác định controller và định tuyến APIquery về đúng controller.
*
*/

require_once("core/control/routing.php");
$controller = \api\core\control\routing::proc();

// xử lý trường hợp không tìm thấy controller
if(!file_exists($controller['controllerPath'])) {
    header("HTTP/1.1 " . 404 . " " . "node not found!");
    header("Content-Type: application/json");   
    echo json_encode(array("error" => "node not found!", "content" => null));
    die();
}

// tạo và chạy controller.
require_once($controller['controllerPath']);
$controller = new $controller['controllerName'] ($controller['nodeIds']);
$controller->proc();