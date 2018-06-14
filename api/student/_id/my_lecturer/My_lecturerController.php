<?php
require_once("core/abstract/NodeController.php");
require_once("student/StudentModel.php");



    class My_lecturerController extends NodeController {
        protected function _POST() {
            // input
            $data = $_POST;
            $ret = array();
            foreach ($_POST as $key => $value) {
                if (!isset($value)) {
                    $ret = array("err"=>"chưa đủ thông tin");
                    return;
                }
            }
            $std_id = intval($this->nodeIds[0]);
             
            // lưu vào CSDL
            $model = new StudentModel();
            if ($model->setStudentInfo($std_id, $data) > 0){
                $ret = array("success"=>true);
            } else {
                $ret = array("err"=>"no change is made");
            }
            $this->response('200', $ret);
        }
        protected function _GET() {
            $std_id = intval($this->nodeIds[0]);

            // get từ CSDL
            $model = new StudentModel();
            $data = $model->getLecturer($std_id);

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
