<?php
require_once("core/abstract/NodeController.php");
require_once("student/StudentModel.php");



    class My_partnerController extends NodeController {
        protected function _POST() {

        }
        protected function _GET() {
            $std_id = intval($this->nodeIds[0]);

            // get từ CSDL
            $model = new StudentModel();
            $data = $model->getPartner($std_id);

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
