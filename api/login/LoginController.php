<?php
require_once("/core/abstract/NodeController.php");
require_once("LoginModel.php");

    class LoginController extends NodeController {
        protected function _POST() {
            $loginModel = new LoginModel();
            $userName = $_POST[username];
            $password = $_POST[password];
            
            $encryptedPass = md5(md5("$password"));
            
            if(!$loginModel->login($userName, $encryptedPass)) {
                // đăng nhập thất bại
                $this->response("401", array("error" => "login error"));
            } else {
                // đăng nhập thành công
                $accessToken = $loginModel->getToken();
                $this->response("200", array("accessToken" => $accessToken));
            }  
        }
        protected function _GET() {

        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
        
    }

?>