<?php
/**
 * this library will handle all operations related to subscribers
 * dependency: db library
 */
if(!isset($checkVar)) 
{
	header("location: ../../index.php");
	exit;
}

class events
{
	public $event = array();
	function __construct()
	{
		/** assuming connected db **/
		$query = mysql_query("SELECT id,keyword,description FROM website_content");
		while($row = mysql_fetch_array($query))
		{
			$index = count($this->event);
			$this->event[$index] = array();
			$this->event[$index]['id'] = $row['id'];
			$this->event[$index]['name'] = $row['keyword'];
			$this->event[$index]['desc'] = $row['description'];
		}
	}
};
 