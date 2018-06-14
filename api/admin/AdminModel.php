<?php
    require_once("core/data/PDOData.php");
    require_once("core/abstract/Model.php");
/*
* Model 
*
*
*/
    class AdminModel extends Model {
        public function getCurentSemester(){
            $data = $this->db->doPreparedQuery("SELECT * FROM semester WHERE active = 1 Order by id desc limit 1",array());
            return $this->fieldsFilter($fieldsArr, $data[0]);
        }
        public function newSemester($a, $b, $c){
            $data = $this->db->doPreparedQuery("UPDATE semester set active = 0 WHERE active = 1",array());
            $data = $this->db->doPreparedQuery("INSERT INTO semester (registerStart, startSeme, endSeme, active) Value (?, ?, ?, 1)",array($a, $b, $c));
            echo $data;
            return $data;
        }
        
    }
?>
