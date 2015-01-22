<?php
$checkVar = true;
include 'config/config.php';
include 'libs/db.php';
if( strpos($_SERVER['HTTP_REFERER'],"cistoner.org") || isset($_GET['key']))
{
	dbase::start_connection();
	$arr = json_decode(str_replace('""',' inches "',$_GET['key']),true);
	$str = "";
	foreach($arr as $key => $val)
	{
		$str .= "<$key>" .str_replace("'"," feet ",htmlentities($val)) ."</$key>" .PHP_EOL;
	}
	//echo "INSERT INTO `femina`(`json`, `added_on`) VALUES ('".$str."','".time()."')";exit;
	$query = mysql_query("INSERT INTO `femina`(`json`, `added_on`) VALUES ('".$str."','".time()."')");
	if(!$query)echo mysql_error();
	dbase::close_connection();
	header("location: http://www.engifest.dce.edu/femina/?code=1&message=Registeration+sucessfull++You+will+be+contacted+shortly");
	exit;
}
else echo "1003";exit;
	
?>