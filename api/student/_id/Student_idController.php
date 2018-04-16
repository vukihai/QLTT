<?php
require_once("/core/abstract/NodeController.php");



    class Student_idController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            $this->response('404', array("message" => "not found123"));
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>