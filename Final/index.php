<?php require_once("includes/connection.php"); ?>
<?php require_once("includes/functionss.php"); ?>
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
	<script src="neww.js"></script>
	<title>Engifest 15 Event Timeline</title>	
</head>
<body>
	
    <div class="bg" id="first">
    </div>
   <div class="pattern">
    </div>
<!--<div id="map" >
    <img src="Map.jpg">
</div>-->
 <div class="header">
 	
 </div>
 <div id="big-container" class="shrink">
 	<div class="big">
 		 <div class="cover">
		     <div class="co">	
		     </div>
		  </div>
		  <div class="desc"></div>
		</div> 
	</div>	
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
        <a href="#" id="div{$i}" class="common">
			<div class="cd-timeline-content">
			    <div class="event_image"><img src="{$row['img_src']}"></div>
            <div class="overflows">
			    <div class="overflows">
			    <div class="overlay">
				</div>
				<div class="circ1"></div>
				<div class="circ2"></div>
			    <div class="see-more"></div>
			    <div id="more" event-details="{$row['description']}"><h3>Details</h3></div>
			</div>
			</div>
				<h2>{$row['event_name']}</h2>
				<p>{$row['short_detail']}</p>
				<div id="temp"></div>
				<span class="cd-date">Feb 14</span>
			</div> <!-- cd-timeline-content -->
		</a>
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

