<?php
require_once("/core/abstract/NodeController.php");



    class StudentController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            foreach($this->nodeIds as $id) {
                echo $id;
            }
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>