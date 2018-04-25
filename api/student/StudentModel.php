<?php
    require_once(__DIR__."/../core/data/PDOData.php");
/*
* Model 
*
*
*/
    class StudentModel {
        protected $db;
        public function __construct() {
			$this->db = new core\data\model\PDOData();
        }
        public function __destruct() {
			$this->db = null;
        }
        private function fieldsFilter($fieldsArr, $data){
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
        public function getAccount($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT vnuID,username,role,lastLogin FROM vnuaccount WHERE vnuaccount.vnuID=?",array($id));
            return $this->fieldsFilter($fieldsArr, $data[0]);
        }
        public function getStudentInfo($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM student WHERE student.id=?",array($id));
            return $this->fieldsFilter($fieldsArr, $data[0]);
        }
        public function getFollows($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM stu_follow WHERE stu_follow.studentID=?",array($id));
            return $data;
        }
        public function getMessages($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM message WHERE message.receiverID=?",array($id));
            return $data;
        }
        public function getReports($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM reports WHERE reports.studentID=?",array($id));
            return $data;
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