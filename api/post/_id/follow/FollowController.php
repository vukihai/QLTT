<?php
require_once("core/abstract/NodeController.php");
require_once("post/PostModel.php");



    class FollowController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }
            $partner_id = intval($this->nodeIds[0]);

            // get từ CSDL
            $model = new PostModel();
            $data = $model->getPostFollower($fieldsArr, $partner_id);

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>