<?php
/*
*   Lớp này định nghĩa khuôn mẫu của 1 controller. Tất cả controller cần extends lớp này.
*
*
*
*/
abstract class NodeController {
    // phương thức của request
    protected $method = '';
    // dữ liệu gửi kèm request
    protected $data = '';
    // token để định danh người gửi request.
    protected $accessToken = '';
    // mảng các id của node. ví dụ: /api/student/16020991/inbox/112233 thì id = array(16020991, 112233)
    protected $nodeIds = array();
    // mảng các parameter.
    protected $fields = '';
    function __construct($nodeIds) {
        // init
        $this->nodeIds = $nodeIds;
        $this->method = $_SERVER['REQUEST_METHOD'];
        switch ($this->method) {
            case 'POST':
                $this->data = $_POST;
                break;
            case 'PUT':
                parse_str(file_get_contents("php://input"), $_PUT);

                foreach ($_PUT as $key => $value)
                {
                    unset($_PUT[$key]);
            
                    $_PUT[str_replace('amp;', '', $key)] = $value;
                }
            
                $_REQUEST = array_merge($_REQUEST, $_PUT);
                $this->data = $_PUT;
                break;
            case 'GET':
            case 'DELETE':
                break;
            default:
                $this->response(500, "Invalid Method");
                die();
            break;
        }
        $this->fields = $_GET['fields'];
        $this->accessToken = $_GET['accessToken'];
    }
    /*
    *   Hàm này để tiến hành chạy controller.
    *
    *
    */
    public function proc() {
        switch ($this->method) {
            case 'POST':
                $this->_POST();
                break;
            case 'GET':
                $this->_GET();
                break;
            case 'PUT':
                $this->_PUT();
                break;
            case 'DELETE':
                $this->_DELETE();
                break;
            default:
                $this->response(500, "Invalid Method");
                die();
            break;
        }
    }
    abstract protected function _GET();
    abstract protected function _POST();
    abstract protected function _PUT();
    abstract protected function _DELETE();
    /*
    * hàm này để trả lại kết quả. 
    * nhận vào http status code và mảng chứa kết quả trả lại.
    *
    */
    protected function response($status_code, $data = NULL){
        $status = array(
            200 => 'OK',
            404 => 'Not Found',
            405 => 'Method Not Allowed',
            500 => 'Internal Server Error'
        );
        
        header("HTTP/1.1 " . $status_code . " " . $status[$status_code]);
        header("Content-Type: application/json");
        echo json_encode($data);
        die();
    }
}


?>