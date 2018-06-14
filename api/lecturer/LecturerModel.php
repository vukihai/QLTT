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
            $data = $this->db->doPreparedQuery("SELECT lecturer.id, lecturer.name, lecturer.VNUmail, lecturer.gmail, lecturer.note, vnuaccount.username FROM lecturer join vnuaccount on lecturer.id = vnuaccount.vnuID WHERE lecturer.id=?",array($id));
            if(sizeof($data) ==1)
                return $this->fieldsFilter($fieldsArr, $data[0]);
            else return array("error" => "lecturer profile not found");
        }
        public function setLecturerProfile($id, $data) {
            $query = "UPDATE lecturer SET ".$this->fieldsFilterForSettingData($data)." WHERE id = ".$id.";";
            return $this->db->doSql($query);
        }
        public function getListStudent($id) {
            $data = $this->db->doPreparedQuery("SELECT vnuaccount.VNUID as id, vnuaccount.username, vnuaccount.fullName, DATE(stu_fixed_info.ngaysinh) as                       ngaysinh,stu_fixed_info.diemTB FROM 
                lecture_studentlist join student on lecture_studentlist.studentID = student.id
                JOIN vnuaccount on student.id = vnuaccount.vnuID
                JOIN stu_fixed_info on student.id = stu_fixed_info.studentID
                WHERE lecture_studentlist.lectureID = ?",array($id));
            return $data;
        }
        public function getLecturerList($limit) {
            $data = $this->db->doQuery("SELECT * FROM lecturer LIMIT 0,".$limit);
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
    }
?>
