<?php
require_once("core/abstract/NodeController.php");
require_once("notification/NotificationModel.php");


    class Notification_idController extends NodeController {
        protected function _POST() {
            if (isset($_POST['readID'])){
                $readID = intval($_POST['readID']);
                echo $readID = intval($_POST['readID']);
                $id = intval($this->nodeIds[0]);
                
                $model = new NotificationModel();
                $model->readID($id, $readID);
            }
        }
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }
            $std_id = intval($this->nodeIds[0]);
            // get từ CSDL
            $model = new NotificationModel();
            $noti = $model->getNoti($std_id, 1);
            // res về client
            $this->response('200',$noti);
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
