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
		<!-- Start WOWSlider.com HEAD section --> <!-- add to the <head> of your page -->

	<link rel="stylesheet" type="text/css" href="engine0/style.css" />

	<script type="text/javascript" src="engine0/jquery.js"></script>

	<!-- End WOWSlider.com HEAD section -->
	</head>
	<body bgcolor="gray">
		<?php }?>
		<div class="demo" id="eventname">
		    <h2 style=<?php if(!isset($_GET['isAjax'])) echo"top:0px"; else echo""?>><?php echo"{$name}"?></h2>    
        	<div class="show-off" id="ename"></div>
        </div>
        <div class="demo" id="eventinfo">
		    <h3><?php echo"{$description}"?></h3>
			
        	<div class="show-off" id="einfo">ENGIFEST</div>
        </div>
        <div class="demo" id="eventgallery">
		     <h2>Gallery</h2> 
			  <!-- Start WOWSlider.com BODY section --> <!-- add to the <body> of your page -->

	<div id="wowslider-container0">

	<div class="ws_images"><ul>
		<li><a href="http://wowslider.com/vf"><img src="data0/images/315189.jpg" alt="full screen slider" title="315189" id="wows0_0"/></a></li>
		<li><img src="data0/images/1907569.jpg" alt="1907569" title="1907569" id="wows0_1"/></li>
	</ul></div>
	<div class="ws_bullets"><div>
		<a href="#" title="315189"><img src="data0/tooltips/315189.jpg" alt="315189"/>1</a>
		<a href="#" title="1907569"><img src="data0/tooltips/1907569.jpg" alt="1907569"/>2</a>
	</div></div><span class="wsl"><a href="http://wowslider.com/vu">image carousel</a> by WOWSlider.com v7.2</span>

	<div class="ws_shadow"></div>

	</div>	

	<script type="text/javascript" src="engine0/wowslider.js"></script>

	<script type="text/javascript" src="engine0/script.js"></script>

	<!-- End WOWSlider.com BODY section -->	
        	<div class="show-off" id="egallery"></div>
        </div>
		<?php
		if(isset($_GET['isAjax']))
		echo "
		<div id='back'><a href='index.html'><img src='css/back.png'></a></div> ";
		?>
   
 </body>
 </html>

