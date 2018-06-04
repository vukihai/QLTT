<?php
require_once("core/abstract/NodeController.php");
require_once("student/_id/messages/MessagesModel.php");


    class Messages_idController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }
            $std_id = intval($this->nodeIds[0]);
            $message_id = intval($this->nodeIds[1]);
            // get từ CSDL
            $model = new MessagesModel();
            $mail = $model->getMessage($fieldArr,$std_id, $message_id);
            // res về client
            $this->response('200', $mail);

            
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
