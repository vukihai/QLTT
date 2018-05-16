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
        private function fieldsFilterForArray($fieldsArr, $dataArr){
            $ret = array();
            foreach ($dataArr as $key => $value) {
                $ret[] = $this->fieldsFilter($fieldsArr, $value);
            }
            return $ret;
        }
        private function fieldsFilterForSettingData($data){
            $query = " ";
            // thêm trường vào. VD: SET 'key' = 'value'
            foreach ($data as $key => $value) {
                $query.=$key." = '".$value."' ,";
            }
            //xóa dấu , thừa cuối xâu
            $query = substr($query, 0, -1);
            return $query;
        }
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
