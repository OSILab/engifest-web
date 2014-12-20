<?php require_once("includes/connection.php"); ?>
<?php require_once("includes/functionss.php"); ?>
<?php
			$id=$_GET['id'];
			$query = "SELECT * from events 
						where event_id={$id}     
						";
						if(!$result = $db->query($query)){
							die('There was an error running the query [' . $db->error . ']');
							}
						else{
								
								$row=$result->fetch_assoc();
								$event_id=$row['event_id'];
                                $event_date=$row['date'];
								$event_venue=$row['venue'];
								$description=$row['description'];
								$name=$row['event_name'];
								$result->free();
							}
if (!isset($_GET['isAjax'])) {
?>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>
	<body bgcolor="gray">
		<?php }?>
		<div id="wrapglass">
		<div class="demo" id="eventname">
		    <h2 style=<?php if(!isset($_GET['isAjax'])) echo"top:0px"; else echo""?>><?php echo"{$name}"?></h2>    
        	<div class="show-off" id="ename"></div>
        </div>
        <div class="demo" id="eventinfo">
		    <h3><?php echo"{$description}"?></h3>
		     <a href="#"><img src="css/button1.png" id="b1"></a>
		     <a href="#"><img src="button1.png" id="b2"></a>
			
        	<div class="show-off" id="einfo"></div>
        </div>
        <div class="demo" id="eventgallery">
		     <h2>Gallery</h2> 
			  
        	<div class="show-off" id="egallery"></div>
        </div>

    
		<div id="back"><a href="index.html"><img src="css/back.png"></a></div>
       </div>
 </body>
 </html>