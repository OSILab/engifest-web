<?php
require("constants.php");

// 1. Create a database connection
$db=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

if ($db->connect_errno>0) {
	die("Database selection failed: " .  $db->connect_error);
}
?>
