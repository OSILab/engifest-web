<?php
/**
 * dummy config file 
 * this is the format of config file that shall be used by
 * all data here shall be taken by user at the time of installation
 */
 if(!isset($checkVar)) 
 {
	header("location: ../../index.php");
	exit;
 }
define("HOST","localhost");
define("USER","engifest");
define("PASSWORD","WGQ2DTzM9RP2vnGq");
define("_DB_MAIN","engifest_2014");
define("username_key",md5("mmt_username"));
define("password_key",md5("mmt_password"));
define("password_salt","temporarypasswordsalt");
define("domain","cistoner.org");