<?php
require_once("core/abstract/NodeController.php");
require_once("student/StudentModel.php");


    class FollowsController extends NodeController {
        protected function _POST() {
            $std_id = intval($this->nodeIds[0]);
            $post = $_POST['postId'];
            $model = new StudentModel();
            $data = $model->followPost($std_id, $post);
            if($data > 0) {
                $this->response('200', array("success" => "theo dõi thành công"));
            } else {
                $this->response('302', array("error" => "thất bại"));
            }
        }
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }
            $std_id = intval($this->nodeIds[0]);

            // get từ CSDL
            $model = new StudentModel();
            $data = $model->getFollowsWithPost($fieldsArr, $std_id);

            // res về client
            $this->response('200', $data);
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
