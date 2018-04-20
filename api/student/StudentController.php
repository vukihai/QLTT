<?php
require_once("/core/abstract/NodeController.php");



    class StudentController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            
            $this->response(200, array("a" => "b"));
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>