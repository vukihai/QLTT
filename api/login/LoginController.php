<?php
require_once("core/abstract/NodeController.php");
require_once("LoginModel.php");

    class LoginController extends NodeController {
        protected function _POST() {
            $loginModel = new LoginModel();
            $userName = $_POST[username];
            $password = $_POST[password];
            
            $encryptedPass = md5(md5("$password"));
            
            if(!$loginModel->login($userName, $encryptedPass)) {
                // đăng nhập thất bại
                $this->response("401", array("error" => "đăng nhập thất bại"));
            } else {
                // đăng nhập thành công
                $accessToken = $loginModel->getToken();
                $role = $loginModel->getUserRole();
		        $id = $loginModel->getId();
                $lastLogin = $loginModel->getLastLogin();
                $fullName = $loginModel->getfullName();
                $responseContent = array("id" => $id,
					"role" => $role,
                                        "lastLogin" =>$lastLogin,
                                         "accessToken" => $accessToken,
                                         "fullName" => $fullName
                                        );
                $this->response("200", $responseContent);
            }  
        }
        protected function _GET() {
            $this->response("200", array("GET" => "please POST instead of GET"));
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
        
    }

?>
