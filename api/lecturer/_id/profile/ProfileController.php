<?php
require_once("core/abstract/NodeController.php");
require_once("/lecturer/LecturerModel.php");
    class ProfileController extends NodeController {
        protected function _POST() {
            $data = $_POST;
            $ret = array();
            foreach ($_POST as $key => $value) {
                if (!isset($value)) {
                    $ret = array("err"=>"chưa đủ thông tin");
                    return;
                }
            }
            $id = intval($this->nodeIds[0]);
             
            // lưu vào CSDL
            $model = new LecturerModel();
            if ($model->setLecturerProfile($id, $data) > 0){
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
            $model = new LecturerModel();
            $data = $model->getLecturerProfile($fieldsArr, $std_id);

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
