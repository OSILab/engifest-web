<?php require_once("includes/connection.php"); ?>

<?php
			
			$query = "SELECT * from events      
						";
						if(!$result = $db->query($query)){
							die('There was an error running the query [' . $db->error . ']');
							}
						else{
								$nr=$result->num_rows;
								$result->data_seek(0);
							}
							?>



<!doctype html>
<html lang="en" class="no-js">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="icon" type="image/gif" href="css/logo.gif">

	<link href='http://fonts.googleapis.com/css?family=Droid+Serif|Open+Sans:400,700' rel='stylesheet' type='text/css'>

	
	<link rel="stylesheet" href="css/reset.css"> <!-- CSS reset -->
	<link rel="stylesheet" href="css/style.css"> <!-- Resource style -->
	<script src="js/modernizr.js"></script> <!-- Modernizr -->
	<script src="jquery-1.11.1.js"></script>
	<title>Engifest 15 Event Timeline</title>	
</head>
<body>
	<div id="img4" >
    <img  id="q" class="i" src="mark.png">
	</div>
    <div class="bg" id="first">
    </div>
	 

	<div class="pattern"></div>
	<div id="map" style="background-image: url(pics/1.png);"></div>
	

	<div class="header" style="color: white">
	    <center><img src="header.png" id="head-image" style='width: 100px;position: relative;top: 10px;z-index: 10;'></center>
	</div>
	<div id="big-container">
		<div class="big">
		   <div class="close" id="bc"><a href="javascript: void(0)"><img src="close.png"></a></div>
			 <div class="cover" style="">
			 <img id="inrImg" src="">
		     <div class="co">	
		     </div>
		  </div>
		  <div class="info">
		  	<div class="date">
		  		
		  	</div>
		  	<div class="desc">
		  	
		  	</div>
		  	<div class="links">
		  	<ul>
		  	<li><a href="inner/reg.php">Register</a></li>
		  	<li><a href="#" class="link_to_inner">Visit Event Page</a></li>
		  	</ul>
		  	</div>
		  </div>
		</div> 
	</div>

	<div id="map-container"></div>
	<div id="map_blob"></div>
</div>
 <div id="wrapper">
	<div id="cd-timeline" class="cd-container">
	<?php 
	$i=1;
	while($row=$result->fetch_assoc()){
	echo <<<_END
	
	
		<div class="cd-timeline-block">
			<div class="cd-timeline-img">
				<img src="img/techie.gif" alt="Picture">
			</div> <!-- cd-timeline-img -->
        
			<div class="cd-timeline-content">
			    <div class="event_image"><img src="{$row['img_src']}"></div>
            
			    
			    <div class="overlay">
				</div>
	
				<div class="circ1"></div>
				<div class="circ2"></div>
			    <div class="see-more" event-details='{$row['description']}' date='{$row['date']}' ename='{$row['event_name']}' event-banner='{$row['img_src_banner']}' event-location='{$row['location']}' data-locn="{$i}"></div>
			    <div id="more" class="more"><h3>Details</h3></div>
		
			
				<h2>{$row['event_name']}</h2>
				<p>{$row['short_detail']}</p>

				<span class="cd-date">Feb 14</span>
			</div> <!-- cd-timeline-content -->
		
		</div> <!-- cd-timeline-block -->
_END;
$i++;
}
?>
</div> <!-- cd-timeline -->
	</div>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="js/main.js"></script> <!-- Resource jQuery -->
<script src="map.js"></script>
</body>
</html>

