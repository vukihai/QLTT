<?php
require_once("core/abstract/NodeController.php");
require_once("admin/AdminModel.php");



    class SemesterController extends NodeController {
        protected function _POST() {
            $registerStart = $_POST[registerStart];
            $semeStart = $_POST[semeStart];
            $semeEnd = $_POST[semeEnd];
            
             $model = new AdminModel();
            $data = $model->newSemester($registerStart, $semeStart, $semeEnd);

            // res về client
            $this->response('200', $data);
        }
        protected function _GET() {
            // get từ CSDL
            $model = new AdminModel();
            $data = $model->getCurentSemester();

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>