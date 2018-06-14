<?php
require_once("core/abstract/NodeController.php");
require_once("student/StudentModel.php");



    class My_lecturerController extends NodeController {
        protected function _POST() {
            $std_id = intval($this->nodeIds[0]);
            $lectureID = $_POST[lectureID];
            $type= $_POST[type];
            $model = new StudentModel();
            
            $data = $model->getLecturer($std_id);
            if(sizeof($data) >0) {
                $this->response('200', array("err"=>"bạn đã có giảng viên hướng dẫn rồi"));
                return;
            }
            $data = $model->setLecturer($std_id, $lectureID, $type);
            $this->response('200',$data);
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
