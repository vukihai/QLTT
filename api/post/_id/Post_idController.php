<?php
require_once("core/abstract/NodeController.php");
require_once("post/PostModel.php");



    class Post_idController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }
            $std_id = intval($this->nodeIds[0]);

            // get từ CSDL
            $model = new PostModel();
            $data = $model->getPost($fieldsArr, $std_id);

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {
            // input
            $data = $this->data;
            $ret = array();
            foreach ($_POST as $key => $value) {
                if (!isset($value)) {
                    $ret = array("err"=>"chưa đủ thông tin");
                    return;
                }
            }
            $post_id = intval($this->nodeIds[0]);
             
            // lưu vào CSDL
            $model = new PostModel();
            if ($model->setPostData($post_id, $data) > 0){
                $ret = array("success"=>true);
            } else {
                $ret = array("err"=>"no change is made");
            }
            $this->response('200', $ret);
        }
        protected function _DELETE() {
            
        }
    }

?>
