<?php
    require_once("core/data/PDOData.php");
    require_once("core/abstract/Model.php");
/*
* Model 
*
*
*/
    class NotificationModel extends Model {
        public function getUnread($id) {
            $data = $this->db->doPreparedQuery("SELECT * FROM notifications WHERE receiverID = ? AND seen = 0 ORDER BY time desc LIMIT 10",array($id));
            return $data;
        }
        public function getNumOfUnread($id) {
            $data = $this->db->doPreparedQuery("select count_noti FROM (SELECT *,COUNT(*) AS count_noti FROM notifications GROUP BY receiverID) as R1 WHERE receiverID = ? AND seen = 0 ",array($id));
            $numOfNoti = $data[0]['count_noti'];
            if($numOfNoti == null) return 0;
            return $numOfNoti;
        }
        public function getAll($id) {
            $data = $this->db->doPreparedQuery("SELECT * FROM notifications WHERE receiverID = ? ORDER BY time desc LIMIT 10",array($id));
            return $data;
        }
    }
?>
