<?php
require_once("core/abstract/NodeController.php");
require_once("partner/PartnerModel.php");



    class PartnerController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }

            // get từ CSDL
            $model = new PartnerModel();
            $data = $model->getPartnerList($fieldsArr);

            // res về client
            $this->response('200', $data );
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
