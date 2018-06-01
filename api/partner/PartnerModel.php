<?php
    require_once("core/data/PDOData.php");
    require_once("core/abstract/Model.php");
/*
* Model 
*
*
*/
    class PartnerModel extends Model {
        public function getPartnerList($fieldsArr){
            $data = $this->db->doQuery("SELECT pa.id, pa.name, pa.contact FROM partner pa");
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function getPostList($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT p.id, p.partnerID, pa.name as partnerName, p.image, p.title, p.content, p.postTime, p.exp FROM post p JOIN partner pa ON p.partnerID = pa.id WHERE pa.id=?",array($id));
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
    }
?>
