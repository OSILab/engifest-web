<?php



function display_errors($error_array) {
	echo "<p class=\"errors\">";
	echo "Please review the following fields:<br />";
	foreach($error_array as $error) {
		if($error!=NULL)
		echo " - " . $error . "<br />";
	}
	echo "</p>";
}

function check_phone_no(){
	if(empty($_POST['phone_no'])) {
	$error='phone_no required';
	return $error;	
	}
	elseif(strlen($_POST['phone_no'])!=10){
		$error='phone_no should be longer';
		return $error;
	}
	else
	return NULL;
	

}

function check_email_id($email='email_id'){
	if(empty($_POST[$email])) {
	$error="email_id required";
	return $error;	
	}
	elseif(strpos($_POST[$email], '@') == false)
	   { 
  //@ not found or not a valid id
  $error="email_id not valid";
  return $error;
}
else
return NULL;

}

function check_username() {
		if(!isset($_POST['username'])||(empty($_POST['username']))) {
			$error='username required'; 	
		return $error;
		}
}

function check_password($password='password'){
	if(empty($_POST[$password])){
	return "password required";
	}
	else{
		return NULL;
	}
}

function check_cpassword(){
	if($_POST['password']!=$_POST['cpassword']){
	$error="password do not match";
	return $error;
	}
}

function get_the_errors($val1, $val2, $val3)
{
	$error=array();
	if($val1!=NULL){
		$error=false;
	}
	elseif($val2!=NULL){
		$error=false;
	}
	if($val3!=NULL){
		$error=false;
	}
	return true;
}

?>