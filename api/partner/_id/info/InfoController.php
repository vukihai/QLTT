<?php
require_once("core/abstract/NodeController.php");
require_once("partner/PartnerModel.php");



    class InfoController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }
            $partner_id = intval($this->nodeIds[0]);

            // get từ CSDL
            $model = new PartnerModel();
            $data = $model->getPartner($fieldsArr, $partner_id);

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>