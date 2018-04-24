<?php
require_once(__DIR__ ."../../../core/abstract/NodeController.php");



    class Student_idController extends NodeController {
        protected function _POST() {
            
        }
        protected function _GET() {
            // mảng fields, cut string bởi dấu ,
            $fieldsArr = explode(",",$_GET['fields']);

            // mô phỏng data response từ CSDL
            $dataRES = array(
                "name" => "Pham Ngoc Duy",
                "age" => 19
            );

            $dataSEND = array();
            foreach($fieldsArr as $k => $v){
                $dataSEND[$v] = $dataRES[$v];
            }

            //JSON trả về
            $ret = array(
                "studentID:" => $this->nodeIds[0],
                "fields" => $dataSEND
            );
            $this->response('200', $ret);
        }
        protected function _PUT() {
            
        }
        protected function _DELETE() {
            
        }
    }

?>
