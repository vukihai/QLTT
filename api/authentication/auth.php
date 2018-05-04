<?php
namespace authentication;

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
                $this->decode($token);
                $this->$tokenContent = $this->decode($token);
                echo 123;
            } finally {
                echo "error: token invalid";
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
    private function validateToken() {
        
    }
    public function proc() {
        // phân tích uri và xác minh quyền tại đây
        
        
        
        
        
        
    }
}