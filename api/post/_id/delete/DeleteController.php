<?php
require_once("core/abstract/NodeController.php");
require_once("post/PostModel.php");



    class DeleteController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            // xử lí input
            $postID = intval($this->nodeIds[0]);

            // xóa trong CSDL
            $model = new PostModel();
            $data = $model->deletePost($postID);
            if ($data > 0){
                $ret = array("success"=>true);
            } else {
                $ret = array("err"=>"no change is made");
            }

            // res về client
            $this->response('200', $ret);
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>