<?php
//events<?php
include __DIR__ ."/constants.php";
$db = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$query = "select * from events";
$data_sql = $db->query($query) or die("'';//" . $db->error); 

$obj = array();
$obj['events'] = array();
$obj['content'] = array();
$i = 0;
if($total = $data_sql->num_rows) {
    while($data = $data_sql->fetch_assoc()) {
			$tmp = array();
            $tmp['title'] = $data['event_name'];
            $tmp['image'] = 'http://engifest.dce.edu/events/' .$data['event_name'];
            $tmp['subtitle'] = $data['short_detail'];
            $tmp['description'] = $data['description'];
            $tmp['contactname'] = null;
            $tmp['contactnubmer'] = null;
            $tmp['contactemail'] = null;

            $obj['content'][$i] = $tmp;
            $obj['events'][$i] = $data['event_name'];
            $i++;
    }
}
echo json_encode($obj);