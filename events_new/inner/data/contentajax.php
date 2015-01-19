<?php
$ref = $_SERVER['SERVER_HOST'];
if($ref!='www.cistoner.org')
{
	exit("brute force detected <br> Your IP has been REGISTERED :/");
}
//--- credientials for database---
include 'db.php';

	if(isset($_POST['key']) && !empty($_POST['key']))
	{
		$con = mysql_connect($server,$username,$password);
		if(!$con)
		{
			echo "Sorry Having trouble connect to server try again later :(";
		}
		else
		{
			mysql_select_db($db_name,$con);
			
				$key = $_POST['key'];
				$query = mysql_query("SELECT `tab`,`main_image`, `caption` , `description` , `date` , `images`,`images_thumb` FROM $db_table WHERE `keyword`='$key' ");
				
				if(mysql_num_rows($query)==1)
				{
					$row = mysql_fetch_array($query);
					$gallerystring='';
					$galleryimages =explode(",",$row['images']);
					if(!empty($galleryimages))
					{
						foreach($galleryimages as $image)
						{
							$gallerystring.="<img src='$image' class=''/>";
						}
					}
					$content = '<div class="bane94-halfspan left" >
									<div class="bane94-image"><img src="'.$row['main_image'].'" title="'.$row['caption'].'" style="width:100%;"/></div>
									<div class="bane94-toolbar">
										<div class="base94-buttons"><input type="submit" value="Register now!" onclick="registershow();return false;" /></div>
									</div>
								</div>
								<div class="bane94-halfspan right" >
									<div class="bane94-timeline">
										'.$row['date'].'
									</div>
									<div class="bane94-description">
										'.$row['description'].'
									</div>
								</div>
								<div class=" bane94-gallery bane94-fullspan slider-horizontal" style="margin: 0px;margin-top: 10px;overflow-x: hidden;overflow-y: hidden;height: 120px; width: 99%;border-radius: 0px;">';
								$img = explode("-_-",$row['images']);
								$imgthumb = explode("-_-",$row['images_thumb']);
								for($i=0;$i<count($img);$i++)
								{
									$content.='<div><a  href="'.$img[$i].'" 
										 class="lightview"
										 data-lightview-group="'.$key.'"
										 data-lightview-title="'.$key.'" 
										 data-lightview-caption="" >
										<img src="'.$imgthumb[$i].'" width="150" height="99" alt=""/>
									  </a></div>';
								}
								$content.= '</div>';
					echo $content;
				}
		}
		
	}

	if($_POST['id'] && !empty($_POST['id']) && isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['gevent']) && !empty($_POST['gevent']) && isset($_POST['gname']))
	{
		$con = mysql_connect($server,$username,$password);
		if(!$con)
		{
			echo "Sorry Having trouble connect to server try again later :(";
		}
		else
		{
			
			mysql_select_db($db_name,$con);
			$id = $_POST['id'];
			$email = htmlentities($_POST['email']);
			$event = htmlentities($_POST['gevent']);
			$name = htmlentities($_POST['gname']);
			
			$ids = explode(";",$id);
			$ids = array_filter($ids);
			
			$queryeventid = mysql_query("SELECT `event-id`,`register` FROM event_list WHERE name LIKE '$event'");
			$roweventid = mysql_fetch_array($queryeventid);
			
			$eventid = $roweventid['event-id'];
			if(count($ids)>$roweventid['register'])
			{
				echo "No. of members exceed limit";exit();
			}
			if(!empty($name) && mysql_num_rows(mysql_query("SELECT `group-name` FROM registrations WHERE `group-name`='$name' AND `event-id`='$eventid'"))>0)
			{
				exit("Please try another Name :/ This is already taken");
			}
				$emailflag=0;
				foreach($ids as $x)
				{
					if(mysql_num_rows(mysql_query("SELECT id FROM users WHERE `user-id`='$x' "))==0)
					{
						exit("$x is invalid :/");
					}
					if(mysql_num_rows(mysql_query("SELECT id FROM registrations WHERE `user-id`='$x' AND `event-id`='$eventid' "))>0)
					{
						exit("$x has already been Registered for this Event<br>Please try without this id.");
					}
					if(mysql_num_rows(mysql_query("SELECT id FROM users WHERE `user-id`='$x' AND email='$email' "))>0)
					{
						$emailflag=1;
					}
				}
				if(!$emailflag)exit("Email validation Failed Please Enter Correct Email");
				foreach($ids as $x)
				{
					$queryinsert = mysql_query("INSERT INTO registrations (`user-id`,`event-id`,`group-name`) VALUES ('$x','$eventid','$name')");
				}
				echo "You have been registered :)";
		}
	}
	
	if(isset($_POST['uid']) && !empty($_POST['uid']))
	{
		$con = mysql_connect($server,$username,$password);
		if(!$con)
		{
			echo "Sorry Having trouble connect to server try again later :(";
		}
		else
		{
			
			mysql_select_db($db_name,$con);
			$uid = $_POST['uid'];
			$queryuid  = mysql_query("SELECT name FROM users WHERE `user-id`='$uid'");
			$rowuid = mysql_fetch_array($queryuid);
			
			echo "<div uid='".$uid."'><div class='uid-name'>".$rowuid['name']."</div><div class='uid-close'>x</div></div>";
		}
	}
	
	
	if(isset($_POST['contactname']) && !empty($_POST['contactname']) && isset($_POST['contactemail']) && !empty($_POST['contactemail']) && isset($_POST['contactmessage']) && !empty($_POST['contactmessage']))
	{	
				$con = mysql_connect($server,$username,$password);
				if(!$con)
				{
					echo "Sorry Having trouble connect to server try again later :(";
				}
				else
				{
					
					mysql_select_db($db_name,$con);
					$name = $_POST["contactname"];
					$email = $_POST["contactemail"];
					$message = $_POST["contactmessage"];
					
				   /*
					* here code for contact us working
					* to engifest.yt@gmail.com
					*/
				}
	}
?>