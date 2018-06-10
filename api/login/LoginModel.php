<?php
    require_once("core/data/PDOData.php");
    require_once("/authentication/auth.php");
/*
* Login model
*
*
*/
    class LoginModel {
        protected $db;
        private $token;
        private $userRole;
        private $lastLogin;
        private $id;
        private $fullName;
        public function __construct() {
			$this->db = new core\data\model\PDOData();
        }
        public function __destruct() {
			$this->db = null;
        }
        /*
        *   Hàm đăng nhập và tạo token.
        *   đăng nhập thành công return true.
        *
        */
        public function login($userName, $encrypted_password) {
            $userAccount = array($userName, $encrypted_password);
            $data = $this->db->doPreparedQuery("SELECT vnuID, role, lastLogin, fullName FROM VNUaccount WHERE username = ? AND password = ?",$userAccount);
            if(count($data) == 1) {
                $tokenData = array();
                $tokenData["id"] = $data[0][vnuID];
                $tokenData["ip"] = $this->getIP();
                $tokenData["user-agent"] = $_SERVER[HTTP_USER_AGENT];
                $tokenData["created-time"] = date('d-m-Y H:i:s');

                $auth = new \authentication\Auth;
                $this->token = $auth->createToken($tokenData);
                
                $this->id = $data[0][vnuID];
                $this->userRole = $data[0]["role"];
                $this->lastLogin = $data[0]["lastLogin"];
                $this->fullName = $data[0]["fullName"];
            } else {
                return false;
                exit();
            }
            return true;
        }
        
        public function getToken() {
            return $this->token;
        }
        public function getUserRole() {
            return $this->userRole;
        }
        public function getId() {
            return $this->id;
        }
        public function getLastLogin() {
            return $this->lastLogin;
        }
        public function getfullName() {
            return $this->fullName;
        }
        /*
        *   Hàm này trả lại IP của client.
        *
        *
        */
        private function getIP() {
            $ip_address;
            if (!empty($_SERVER['HTTP_CLIENT_IP'])){  
			     $ip_address = $_SERVER['HTTP_CLIENT_IP'];  
            } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){ 
                $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
            } else {
                $ip_address = $_SERVER['REMOTE_ADDR'];
            }
            return $ip_address;
        }
    }
?>
