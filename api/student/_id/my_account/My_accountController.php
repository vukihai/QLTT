<?php
require_once("core/abstract/NodeController.php");
require_once("student/StudentModel.php");



    class My_accountController extends NodeController {
        protected function _POST() {
            $id = intval($this->nodeIds[0]);
            isset($this->data['password'])?$password = md5(md5($this->data['password'])): null;
            isset($this->data['newPassword'])?$newPassword = md5(md5($this->data['newPassword'])): null;
            $model = new StudentModel();
            $ret;
            if ($model->updatePassword($id,$password, $newPassword) > 0){
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
            $std_id = intval($this->nodeIds[0]);

            // get từ CSDL
            $model = new StudentModel();
            $data = $model->getAccount($fieldsArr, $std_id);

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {
           
        }
        protected function _DELETE() {
            
        }
    }

?>
