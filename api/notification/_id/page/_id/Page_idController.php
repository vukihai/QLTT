<?php
require_once("core/abstract/NodeController.php");
require_once("notification/NotificationModel.php");


    class Page_idController extends NodeController {
        protected function _POST() {
        }
        protected function _GET() {
            $id = intval($this->nodeIds[0]);
            $page = intval($this->nodeIds[1]);
            // get từ CSDL
            $model = new NotificationModel();
            $noti = $model->getNoti($id, $page);
            // res về client
            $this->response('200',$noti);
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
