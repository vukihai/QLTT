<?php
    require_once("core/data/PDOData.php");
    require_once("core/abstract/Model.php");
/*
* Model 
*
*
*/
    class MessagesModel extends Model {
        public function getListMessages($fieldsArr, $id){
            $data = $this->db->doPreparedQuery("SELECT * FROM message WHERE message.receiverID=? ORDER BY message.sendTime LIMIT 20",array($id));
            
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function getMessage($fieldsArr, $stu_id, $mess_id){
            $data = array();
            $parentMessage = $this->db->doPreparedQuery("SELECT * FROM message WHERE message.receiverID=? AND message.id=?",array($stu_id,$mess_id));
            array_push($data, $parentMessage[0]);
            $re = $this->db->doPreparedQuery("SELECT * FROM message WHERE message.receiverID=? AND message.parentID=? ORDER BY message.sendTime limit 20",array($stu_id,$parentMessage[0][id]));
            array_push($data, $re);
            return $data;
        }
    }
?>
