<?php session_start();?>
<?php require_once("includes/connection.php"); ?>
<?php require_once("includes/functionss.php"); ?>
<?php
if (isset($_POST['submit'])) { // Form has been submitted.
		$event_id = $_POST['event_id'];
		$name=$_POST['name'];
		$description=$_POST['description'];
		$date=$_POST['date'];
		$venue=$_POST['venue'];
		$hasregis=$_POST['hasregistration'];
			$query = "INSERT INTO events (
						     event_id, event_name,description,date,venue,hasregis
						) VALUES (
							'{$event_id}', '{$name}','{$description}','{$date}','{$venue}',{$hasregis}
						)";
						if(!$result = $db->query($query)){
							die('There was an error running the query [' . $db->error . ']');
							}
	}
?>
<html>
<head>
<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
<form action="filldata.php" method="post">
<label for="email">Event Id:</label>  
                    <input type="text" name="event_id" ><br/>
                    <label for="password">event name:</label>
                    <input type="text" name="name"><br/>
					<label for="description">description:</label>
                    <input type="text" name="description"><br/>
					<label for="date">event date:</label>
                    <input type="text" name="date"><br/>
					<label for="venue">event venue:</label>
                    <input type="text" name="venue"><br/>
					<label for="hasregistration">hasregistration:</label>
                    <input type="text" name="hasregistration"><br/>
					<input type="submit" name="submit" value="submit" />	
                </form>
</body>
</html>