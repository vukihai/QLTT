<?php
require_once("core/abstract/NodeController.php");
require_once("notification/NotificationModel.php");


    class NumOfUnreadController extends NodeController {
        protected function _POST() {
        }
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }
            $std_id = intval($this->nodeIds[0]);
            // get từ CSDL
            $model = new NotificationModel();
            $unread = $model->getNumOfUnread($std_id);
            // res về client
            $this->response('200',array("numOfUnread" => $unread));
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
