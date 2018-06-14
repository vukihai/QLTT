<?php
    require_once("core/data/PDOData.php");
    require_once("core/abstract/Model.php");
/*
* Model 
*
*
*/
    class PartnerModel extends Model {
        public function getPartnerList($fieldsArr, $limit){
            $data = $this->db->doQuery("SELECT pa.id, pa.name, pa.contact FROM partner pa LIMIT 0,".$limit);
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function getPartner($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT pa.id, pa.name, pa.contact FROM partner pa WHERE pa.id=?",array($id));
            return $this->fieldsFilter($fieldsArr, $data[0]);
        }
        public function getPostList($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT p.id, p.partnerID, pa.name as partnerName, p.image, p.title, p.content, p.postTime, p.exp FROM post p JOIN partner pa ON p.partnerID = pa.id WHERE pa.id=? ORDER BY p.postTime DESC",array($id));
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function newPost($id, $data) {
            $query = "INSERT INTO post (id, partnerID, title, image, content, postTime, exp, priorityOrder) VALUES (NULL, '".$id."', '".$data['title']."', '".$data['image']."', '".$data['content']."',  NOW(), '".$data['exp']."', '0');";
            return $this->db->doSql($query);
        }
    }
?>