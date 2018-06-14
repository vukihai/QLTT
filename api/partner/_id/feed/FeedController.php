<?php
require_once("core/abstract/NodeController.php");
require_once("partner/PartnerModel.php");



    class FeedController extends NodeController {
        protected function _POST() {
            $data = $_POST;
            $ret = array();
            foreach ($_POST as $key => $value) {
                if (!isset($value) || ($key!= 'image' && $value == '')) {
                    $ret = array("err"=>"chưa đủ thông tin");
                    $this->response('200', $ret);
                    return;
                }
            }
            $id = intval($this->nodeIds[0]);
             
            // lưu vào CSDL
            $model = new PartnerModel();
            if ($model->newPost($id, $data) > 0){
                $ret = array("success"=>true);
            } else {
                $ret = array("err"=>"tạo bài viết thất bại");
            }
            $this->response('200', $ret);
        }
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }
            $partner_id = intval($this->nodeIds[0]);

            // get từ CSDL
            $model = new PartnerModel();
            $data = $model->getPostList($fieldsArr, $partner_id);

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>