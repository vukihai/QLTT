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
        public function followPost($id, $postId){
            $query = "INSERT INTO stu_follow (studentId, postId, status, phongVanDate, finalSemeComment) VALUES (". $id . ",". $postId.",1,'','')";
            return $this->db->doSql($query);
        }
        public function getFollows($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM stu_follow WHERE stu_follow.studentID=?",array($id));
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function getFollowsWithPost($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT postId, status, pa.name as partnerName, title, content, postTime, exp FROM stu_follow sf JOIN post p ON sf.postId = p.id JOIN partner pa ON p.partnerID = pa.id WHERE sf.studentID=?",array($id));
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function getMessages($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM message WHERE message.receiverID=?",array($id));
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function getReports($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM reports r JOIN message m ON r.messageID = m.id WHERE r.studentID=?",array($id));
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function getFixedInfo($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM stu_fixed_info WHERE stu_fixed_info.studentID=?",array($id));
            return $this->fieldsFilter($fieldsArr, $data[0]);
        }
        public function getStuFollow($std_id, $post_id) {
            $data = $this->db->doPreparedQuery("SELECT * FROM stu_follow WHERE studentID=? AND postid = ?",array($std_id, $post_id));
            return $data;
        }
        public function updatePassword($id,$oldPassword,$newPassword){
            //return $this->db->doPreparedSql("UPDATE vnuaccount SET password = ? WHERE vnuaccount.vnuID = ?",array($newPassword,$id));
            return $this->db->doSql("UPDATE vnuaccount SET password = '".$newPassword."' WHERE vnuaccount.vnuID = ".$id." AND vnuaccount.password = '".$oldPassword."'");
        }
        public function getLecturer($std_id) {
            $data = $this->db->doPreparedQuery("SELECT * FROM lecture_studentlist join lecturer on lecture_studentlist.lectureID = lecturer.id join vnuaccount on lecturer.id = vnuaccount.VNUid  WHERE lecture_studentlist.studentID=?",array($std_id));
            return $data;
        }
        public function setLecturer($std_id, $lec_id) {
            $data = $this->db->doPreparedQuery("INSERT INTO lecture_studentlist (lectureID, studentID) value (?, ?)",array($std_id,$lec_id));
            return $data;
        }
        public function getPartner($std_id) {
            $data = $this->db->doPreparedQuery("SELECT pa.id, pa.name FROM stu_follow sf JOIN post p ON sf.postId = p.id JOIN partner pa ON p.partnerID = pa.id WHERE sf.studentId=? AND sf.status = 4",array($std_id));
            return $data;
        }
        public function newReport($id, $data){
            $query = "INSERT INTO reports (id, lecturerID, weekStart, studentID, messageID) VALUES (". $data["lecturerID"].",'".$data["weekStart"]."',".$data["studentID"].",".$data["messageID"].")";
            return $this->db->doSql($query);
        }
        
    }
?>
