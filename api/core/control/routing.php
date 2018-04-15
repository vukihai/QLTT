<?php
    namespace api\core\control;
    /*
    //  lớp này dùng để định tuyến URI cho api.
    //
    //
    */
    class Routing {
        // hàm xử lý quá trình định tuyến
        public static function proc() {
            $uri = $_SERVER[REQUEST_URI];
            
            echo $uri;
        }
    }
?>