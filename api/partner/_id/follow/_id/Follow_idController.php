<?php
require_once("/core/abstract/NodeController.php");
require_once("/partner/PartnerModel.php");



    class Follow_idController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {

            $partnerID = intval($this->nodeIds[0]);
            $stdID = intval($this->nodeIds[1]);
            $postID = $_GET["postID"];
            $status = $_GET["status"];

            if ($status == 4) {
                $status = 0;
            } else {
                $status++;
            }
            // get từ CSDL
            $model = new PartnerModel();
            $data = $model->setPostStatus($postID, $stdID, $status);

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>