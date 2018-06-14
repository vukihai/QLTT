<?php
namespace authentication;
require_once("Lib/BeforeValidException.php");
require_once("Lib/ExpiredException.php");
require_once("Lib/SignatureInvalidException.php");
require_once("Lib/JWT.php");
class Auth {
    // key dùng để mã hóa token
    private $secretKey = "afdfsadfbgfsfdksfhskgshdkgj";
    // nội dung token sau khi giải mã
    private $tokenContent;
    function __construct() {
        // init
        $token = $_GET["accessToken"];
        if(isset($token)) {      
            try {
                $this->tokenContent = $this->decode($token);
            } catch(Exception $e) {
                // ****
                die();
            }
        }
        
    }
    /*
    *
    * hàm này để gọi thư viện mã hóa token
    * $auth_content là nội dung token
    */
    public function createToken($auth_content) {
        return \Firebase\JWT\JWT::encode($auth_content, $this->secretKey);
    }

    /*
    *
    * hàm này để giải mã token
    */
    private function decode($token) {
        return (array) \Firebase\JWT\JWT::decode($token, $this->secretKey, array('HS256'));
    }
    /*
    *   Hàm để xác minh token có đúng IP, user-agent k và hết hạn chưa.
    *
    */
    private function validateToken() {
        $user_agent = $_SERVER[HTTP_USER_AGENT];
        $created_time = date('d-m-Y H:i:s');
        $ip_address;
        if (!empty($_SERVER['HTTP_CLIENT_IP'])){  
             $ip_address = $_SERVER['HTTP_CLIENT_IP'];  
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){ 
            $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip_address = $_SERVER['REMOTE_ADDR'];
        }
        if(!($user_agent == $this->tokenContent["user-agent"] && $ip_address == $this->tokenContent["ip"])) {
            return false;
        }
        return true;
    }
    private function validateId() {
        // xác minh id
        $id = -1;
        $nodePathArr = explode('/', trim($_SERVER['PATH_INFO'],'/'));
        foreach($nodePathArr as $node) {
            if(is_numeric($node)) {
                $id = $node;
                break;
            }
        }
        if($id == -1) return true;
        if(!($id == $this->tokenContent["id"])) {
            return false;
        }
        return true;
    }
    public function proc() {
        $nodePathArr = explode('/', trim($_SERVER['PATH_INFO'],'/'));
        if(!($nodePathArr[0] =="login" 
             ||$nodePathArr[0] =="post" 
            || $nodePathArr[0] =="lecture" && $nodePathArr[2] !="profile")) {
            if(isset($_GET["accessToken"])) {
                if(!$this->validateToken()) {
                    echo '{"token": "token invalid"}';
                    die();
                }
                if(!$this->validateId()) {
                    echo '{"token": "access denied"}';
                    die();
                }
            } else {
                echo '{"token": "token not found"}';
                die();
            }
        }
    }
}
