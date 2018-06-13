<?php
require_once("core/abstract/NodeController.php");
require_once("student/StudentModel.php");


    class Follows_idController extends NodeController {
        protected function _POST() {
        }
        protected function _GET() {
            // xử lí input
            if (isset($_GET['fields'])){
                $fieldsArr = explode(",",$_GET['fields']);
            }
            $std_id = intval($this->nodeIds[0]);
            $post_id = intval($this->nodeIds[1]);
            // get từ CSDL
            $model = new StudentModel();
            $data = $model->getStuFollow($std_id, $post_id);

            // res về client
            if(sizeof($data) >= 1) {
                $this->response('200', array("follow" => 1));    
            } else
                $this->response('200', array("follow" => 0));    
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
