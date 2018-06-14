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
            $limit = 50;
            if (isset($_GET["limit"])){
                $limit = $_GET["limit"];
            }
            // get từ CSDL
            $model = new PartnerModel();
            $data = $model->getPartnerList($fieldsArr, $limit);

            // res về client
            $this->response('200', $data );
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
