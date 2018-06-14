<?php
require_once("core/abstract/NodeController.php");
require_once("post/PostModel.php");



    class Post_idController extends NodeController {
        protected function _POST() {
            // input
            $data = $this->data;
            $ret = array();
            foreach ($_POST as $key => $value) {
                if (!isset($value) || ($key!= 'image' && $value == '')) {
                    $ret = array("err"=>"chưa đủ thông tin");
                    $this->response('200', $ret);
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
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }
            $postID = intval($this->nodeIds[0]);

            $model = new PostModel();
            // get từ CSDL
            if ($_GET["requestRole"] == 0){
                $data = $model->getPostWithFollow($fieldsArr, $postID, $_GET["requestID"]);
            } else {
                $data = $model->getPost($fieldsArr, $postID);
            }

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {

        }
        protected function _DELETE() {
            
        }
    }

?>
