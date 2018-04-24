<?php
require_once(__DIR__ ."../../core/abstract/NodeController.php");




    class StudentController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            
            $this->response(200, array("page" => "Student default page"));
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
