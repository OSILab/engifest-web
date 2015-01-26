<?php
include __DIR__ ."/constants.php";
$db = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$query = "select event_id, event_name, venue,date from events";
$data_sql = $db->query($query) or die("'';//" . $db->error); 
    $obj = array();
    $obj['schedule'] = array();
    $i = 0;
    if($total = $data_sql->num_rows) {
        while($data = $data_sql->fetch_assoc()) {
				$tmp = array();
                $tmp['id'] = $data['event_id'];
                $tmp['name'] = $data['event_name'];
                $tmp['location'] = $data['venue'];
                $tmp['date'] = $data['date'];
                $tmp['time'] = null;
                $obj['schedule'][$i++] = $tmp;
        }
    }
    echo json_encode($obj);