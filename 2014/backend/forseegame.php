<?php
$checkVar = true;
include 'config/config.php';
include 'libs/db.php';
if(isset($_POST['Name'])&&isset($_POST['LoginID'])&&isset($_POST['Mobile'])&&isset($_POST['Gender'])&&isset($_POST['Birthday'])&&isset($_POST['VisitorType'])&&isset($_POST['CollegeName'])&&isset($_POST['UC']))
{
	dbase::start_connection();
	$name = $_POST['Name'];
	$email = $_POST['LoginID'];
	$phone = $_POST['Mobile'];
	$sex = $_POST['Gender'];
	$dob = $_POST['Birthday'];
	$vt = $_POST['VisitorType'];
	$college = $_POST['CollegeName'];
	$uc = $_POST['UC'];
	
	
	$query = mysql_query("INSERT INTO `users`(`user-id`, `name`, `college`, `email`, `phone`, `sex`, `VisitorType`, `dob`) VALUES ('$uc','$name','$college','$email','$phone','$sex','$vt','$dob')");
	if(!$query){echo mysql_error();exit;}
	dbase::close_connection();
		
}
?>