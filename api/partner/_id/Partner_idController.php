<?php
require_once("core/abstract/NodeController.php");
require_once("partner/PartnerModel.php");



    class Partner_idController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            $data = array("message"=>"visit /feed");
            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {

        }
        protected function _DELETE() {
            
        }
    }

?>
