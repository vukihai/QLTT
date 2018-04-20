<?php
    namespace api\core\control;
    /*
    //  lớp này dùng xác định Datanode để định tuyến request về đúng controller.
    //  
    //  URI có dạng /node-parent/node-child1/node-child2/...?fields=param1,param2,param3
    //  ví dụ: student/16020123/stu-fixed-info?fields=class,student_code,emailVNU
    */
    class Routing {
        /*
        * hàm phân tích Request URI để lấy tên node và đường dẫn đến controller tương ứng.
        *
        */
        public static function proc() {
            $ret = array();
            // xác định tên lớp controller.
            $nodePathArr = explode('/', trim($_SERVER['PATH_INFO'],'/'));
            $nodeName = $nodePathArr[sizeof($nodePathArr) - 1];
            if(is_numeric($nodeName) && sizeof($nodePathArr) >1) {
                $nodeName = $nodePathArr[sizeof($nodePathArr) - 2] . '_id';
            }
            // xác định đường dẫn đến file controller.
            $controllerPath = '';
            foreach($nodePathArr as $node) {
                if(!is_numeric($node)) {
                    $controllerPath .=  $node .'/';
                } else {
                    $controllerPath .= '_id/';
                }
            }
            $controllerPath .= ucfirst($nodeName) . 'Controller.php';
            
            // xác định các id của node
            $nodeIds = array();
            foreach($nodePathArr as $node) {
                if(is_numeric($node)) {
                    array_push($nodeIds, $node);
                }
            }
            
            $ret['nodeIds'] = $nodeIds;
            $ret['controllerName'] = ucfirst($nodeName) . 'Controller';
            $ret['controllerPath'] = $controllerPath;
            return $ret;
        }
    }
?>