<?php
require_once("core/abstract/NodeController.php");
require_once("post/PostModel.php");



    class PostController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }

            // get từ CSDL
            $model = new PostModel();
            $data = $model->getPostList($fieldsArr);

            // res về client
            $this->response('200', $data );
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
