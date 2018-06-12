<?php
require_once("core/abstract/NodeController.php");



    class UploadController extends NodeController {
        protected function _POST() {
            $ret['success'] = false;
            $ret['message'] = "null";
            $uploaddir = './uploads/';
            // check if dir exists, if not create one
            if (!file_exists($uploaddir) && !is_dir($uploaddir)) {
                mkdir($uploaddir);         
            } 
            // rename file
            $uploadfile = $uploaddir.time().basename($_FILES['upfile']['name']);

            // check if file exists, if not you can upload
            if (!file_exists($uploadfile)) {     
                //upload
                if (move_uploaded_file($_FILES['upfile']['tmp_name'], $uploadfile)) {
                    $this->response(200, array("success" => true));
                    return;
                }else{
                    $ret['message'] = "Possible file upload attack!";
                } 
            } else {
                $ret['message'] = "File name is exists, please try again now!";
            }
            

            $this->response(200, array("err" => $ret['message']));
        }
        protected function _GET() {
            $this->response(200, array("err" => "PLEASE POST INSTEAD OF GET METHOD"));
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
