<?php
require_once("core/abstract/NodeController.php");
require_once("messages/MessagesModel.php");


    class Messages_idController extends NodeController {
        protected function _POST() {
            $std_id = intval($this->nodeIds[0]);
            $messageBody = array("receiver" => $_POST[receiver], "subject" => $_POST[subject], "content" =>$_POST[content], "parent" => intval($_POST[parent]));
            $model = new MessagesModel();
            $res = $model->newMessage($std_id, $messageBody);
            $this->response('200', $res);
        }
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }
            $std_id = intval($this->nodeIds[0]);
            // get từ CSDL
            $model = new MessagesModel();
            $mail = $model->getListMessages($fieldArr,$std_id);
            // res về client
            $this->response('200', $mail);

            
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
