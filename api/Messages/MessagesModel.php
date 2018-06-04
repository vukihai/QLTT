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
            $data = $this->db->doPreparedQuery("SELECT message.id, vnuaccount.fullName as sender, message.subject, message.sendTime, message.seen FROM message join vnuaccount on message.senderID=vnuaccount.VNUid WHERE message.receiverID=? ORDER BY message.sendTime LIMIT 20",array($id));
            
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function getMessage($fieldsArr, $stu_id, $mess_id){
            $data = array();
            // tin nhan hien tai
            $thisMessage = $this->db->doPreparedQuery("SELECT message.parentID, vnuaccount.fullName as sender, message.subject,  message.content, message.attachment, message.sendTime, message.seen FROM message join vnuaccount on message.senderID=vnuaccount.VNUid WHERE message.receiverID=? AND message.id=?",array($stu_id,$mess_id));
            
            if($thisMessage[0]["parentID"] != null) {
                $re = $this->db->doPreparedQuery("SELECT message.id, vnuaccount.fullName as sender, message.subject,  message.content, message.attachment, message.sendTime, message.seen FROM message join vnuaccount on message.senderID=vnuaccount.VNUid WHERE message.receiverID=? AND message.parentID=? ORDER BY message.sendTime DESC limit 20",array($stu_id,$thisMessage[0]["parentID"]));
                foreach($re as $i) {
                array_push($data, $i);
                }
                //tin root
                $root = $this->db->doPreparedQuery("SELECT message.id, message.parentID, vnuaccount.fullName as sender, message.subject,  message.content, message.attachment, message.sendTime, message.seen FROM message join vnuaccount on message.senderID=vnuaccount.VNUid WHERE message.receiverID=? AND message.id=?",array($stu_id,$thisMessage[0]["parentID"]));
                array_push($data, $root[0]);
            } else {
                array_push($data, $thisMessage[0]);
            }
            
            return $data;
        }
    }
?>
