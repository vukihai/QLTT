<?php
    require_once("core/data/PDOData.php");
    require_once("core/abstract/Model.php");
/*
* Model 
*
*
*/
    class StudentModel extends Model {
        public function getAccount($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT vnuID,username,role,lastLogin FROM vnuaccount WHERE vnuaccount.vnuID=?",array($id));
            return $this->fieldsFilter($fieldsArr, $data[0]);
        }
        public function getStudentInfo($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM student WHERE student.id=?",array($id));
            return $this->fieldsFilter($fieldsArr, $data[0]);
        }
        public function setStudentInfo($id, $data){
            $query = "UPDATE student SET ".$this->fieldsFilterForSettingData($data)." WHERE student.id = ".$id.";";
            return $this->db->doSql($query);
        }
        public function getFollows($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM stu_follow WHERE stu_follow.studentID=?",array($id));
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function getFollowsWithPost($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT postId, status, pa.name as partnerName, content, postTime, exp FROM stu_follow sf JOIN post p ON sf.postId = p.id JOIN partner pa ON p.partnerID = pa.id WHERE sf.studentID=?",array($id));
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function getMessages($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM message WHERE message.receiverID=?",array($id));
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function getReports($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM reports WHERE reports.studentID=?",array($id));
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function getFixedInfo($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM stu_fixed_info WHERE stu_fixed_info.studentID=?",array($id));
            return $this->fieldsFilter($fieldsArr, $data[0]);
        }
        public function updatePassword($id,$oldPassword,$newPassword){
            //return $this->db->doPreparedSql("UPDATE vnuaccount SET password = ? WHERE vnuaccount.vnuID = ?",array($newPassword,$id));
            return $this->db->doSql("UPDATE vnuaccount SET password = ".$newPassword." WHERE vnuaccount.vnuID = ".$id." AND vnuaccount.password = ".$oldPassword);
        }
    }
?>
