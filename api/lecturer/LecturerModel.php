<?php
    require_once("core/data/PDOData.php");
    require_once("core/abstract/Model.php");
/*
* Model 
*
*
*/
    class LecturerModel extends Model {
        
        public function getLecturerProfile($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM lecturer WHERE id=?",array($id));
            if(sizeof($data) ==1)
                return $this->fieldsFilter($fieldsArr, $data[0]);
            else return array("error" => "lecturer profile not found");
        }
        public function setLecturerProfile($id, $data) {
            $query = "UPDATE lecturer SET ".$this->fieldsFilterForSettingData($data)." WHERE id = ".$id.";";
            return $this->db->doSql($query);
        }
    }
?>
