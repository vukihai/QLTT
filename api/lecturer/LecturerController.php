<?php
require_once("/core/abstract/NodeController.php");



    class LecturerController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            $this->response(404, array("abc" => "123", "123" =>abc));
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>