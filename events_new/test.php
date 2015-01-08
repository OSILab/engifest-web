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
							if (!isset($_GET['isAjax']) {
?>
<html>
<head>
<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
<?php } ?>
<div>
<?php echo"<h2>event name: {$name}</br>";
	  echo"<h2>event date: {$event_date}</br>";
	  echo"<h2>event venue: {$event_venue}</br>";
	  echo"<h2>description: {$description}</br>";
?>
</div>
</body>
</html>