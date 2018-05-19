<?php
    require_once("core/data/PDOData.php");
/*
* Model 
*
*
*/
    class Model {
        protected $db;
        public function __construct() {
			$this->db = new core\data\model\PDOData();
        }
        public function __destruct() {
			$this->db = null;
        }
        protected function fieldsFilter($fieldsArr, $data){
            $ret = array();
            if (!isset($fieldsArr)) {
                $ret = $data;
            } else {
                foreach($fieldsArr as $k => $v) {
                    $ret[$v] = $data[$v];
                }
            }
            return $ret;
        }
        protected function fieldsFilterForArray($fieldsArr, $dataArr){
            $ret = array();
            foreach ($dataArr as $key => $value) {
                $ret[] = $this->fieldsFilter($fieldsArr, $value);
            }
            return $ret;
        }
        protected function fieldsFilterForSettingData($data){
            $query = " ";
            // thêm trường vào. VD: SET 'key' = 'value'
            foreach ($data as $key => $value) {
                $query.=$key." = '".$value."' ,";
            }
            //xóa dấu , thừa cuối xâu
            $query = substr($query, 0, -1);
            return $query;
        }
    }
?>