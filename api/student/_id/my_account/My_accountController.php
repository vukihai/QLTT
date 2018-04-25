<?php
require_once(__DIR__ ."../../../../core/abstract/NodeController.php");
require_once(__DIR__ ."/../../StudentModel.php");



    class My_accountController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }
            $std_id = intval($this->nodeIds[0]);

            // get từ CSDL
            $model = new StudentModel();
            $data = $model->getAccount($fieldsArr, $std_id);

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {
            $id = intval($this->nodeIds[0]);
            isset($this->data['password'])?$password = $this->data['password']: null;
            isset($this->data['newPassword'])?$newPassword = $this->data['newPassword']: null;
            $model = new StudentModel();
            $result = $model->updatePassword($id,$password, $newPassword);
            $ret = array(
                "success" => $result,
            );
            $this->response('200', $ret);
        }
        protected function _DELETE() {
            
        }
    }

?>