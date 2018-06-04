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
            $data = $this->db->doPreparedQuery("SELECT message.id, vnuaccount.fullName as sender, message.subject, message.sendTime, message.seen FROM message join vnuaccount on message.senderID=vnuaccount.VNUid WHERE message.receiverID=? ORDER BY message.sendTime desc LIMIT 20",array($id));
            
            return $this->fieldsFilterForArray($fieldsArr, $data);
        }
        public function getMessage($fieldsArr, $stu_id, $mess_id){
            $data = array();
            //tim id thu root
            $thisMessage = $this->db->doPreparedQuery("SELECT message.id, message.parentID FROM message WHERE message.receiverID=? AND message.id=?",array($stu_id,$mess_id));
            if($thisMessage[0]["parentID"] != null) {
                $root = $thisMessage[0]["parentID"];
            } else {
                $root = $thisMessage[0]["id"];
            }
            // lay cac thu cung root
            $re = $this->db->doPreparedQuery("SELECT message.id, vnuaccount.fullName as sender, message.subject,  message.content, message.attachment, message.sendTime, message.seen FROM message join vnuaccount on message.senderID=vnuaccount.VNUid WHERE message.parentID=? ORDER BY message.sendTime DESC limit 20",array($root));
            foreach($re as $i) {
                array_push($data, $i);
            }
            // lay root
            $rootMess = $this->db->doPreparedQuery("SELECT message.id, vnuaccount.fullName as sender, message.subject,  message.content, message.attachment, message.sendTime, message.seen FROM message join vnuaccount on message.senderID=vnuaccount.VNUid WHERE message.id=?",array($root));
            array_push($data, $rootMess[0]);
            return $data;
        }
    }
?>
