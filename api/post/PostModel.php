<?php
    require_once("core/data/PDOData.php");
    require_once("core/abstract/Model.php");
/*
* Model 
*
*
*/
    class PostModel extends Model {
        public function getPostList($fieldsArr){
            $data = $this->db->doQuery("SELECT p.id, p.partnerID, pa.name as partnerName, p.image, p.title, p.content, p.postTime, p.exp FROM post p JOIN partner pa ON p.partnerID = pa.id ORDER BY p.priorityOrder DESC, p.postTime DESC, p.exp DESC");
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function getPost($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT p.id, p.partnerID, pa.name as partnerName, p.image, p.title, p.content, p.postTime, p.exp FROM post p JOIN partner pa ON p.partnerID = pa.id WHERE p.id=?",array($id));
            return $this->fieldsFilter($fieldsArr, $data[0]);
        }
        public function getPostWithFollow($fieldsArr, $id, $std_id){
            $data = $this->db->doPreparedQuery("SELECT p.id, p.partnerID, pa.name as partnerName, p.image, p.title, p.content, p.postTime, p.exp, !ISNULL(sf.id) as followStatus FROM post p JOIN partner pa ON p.partnerID = pa.id LEFT JOIN stu_follow sf ON p.id = sf.postId WHERE p.id=?",array($id));
            return $this->fieldsFilter($fieldsArr, $data[0]);
        }
        public function setPostData($id, $data){
            $query = "UPDATE post SET ".$this->fieldsFilterForSettingData($data)." WHERE post.id = ".$id.";";
            return $this->db->doSql($query);
        }
        public function getPostFollower($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM stu_follow sf JOIN stu_fixed_info sfi ON sf.studentId = sfi.studentID WHERE sf.postId = ?",array($id));
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function deletePost($id){
            $query = "DELETE FROM post WHERE post.id = ".$id;
            return $this->db->doSql($query);
        }
    }
?>