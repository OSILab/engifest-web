<?php
// This file is the place to store all basic functions

	function mysql_prep( $value ) {
		$magic_quotes_active = get_magic_quotes_gpc();
		$new_enough_php = function_exists( "mysql_real_escape_string" ); // i.e. PHP >= v4.3.0
		if( $new_enough_php ) { // PHP v4.3.0 or higher
			// undo any magic quote effects so mysql_real_escape_string can do the work
			if( $magic_quotes_active ) { $value = stripslashes( $value ); }
			$value = mysql_real_escape_string( $value );
		} else { // before PHP v4.3.0
			// if magic quotes aren't already on then add slashes manually
			if( !$magic_quotes_active ) { $value = addslashes( $value ); }
			// if magic quotes are active, then the slashes already exist
		}
		return $value;
	}
        
        

	function redirect_to( $location = NULL ) {
		if ($location != NULL) {
			header("Location: {$location}");
			exit;
		}
	}
	
	//funtion to calculate the time diff in days, hours
	function print_time($exp){
		 $now = time();
		  $diff = $now-$exp;
			//conversions
			if($diff>=60){
				if($diff>=3600){
					if($diff>=86400){
					$days=(int)($diff/86400);
					$diff%=86400;
					$hours=(int)($diff/3600);
					$diff%=3600;
					$mins=(int)($diff/60);
					$diff%=60;
					$secs=$diff;
					}
					else{
					$hours=(int)($diff/3600);
					$diff%=3600;
					$mins=(int)($diff/60);
					$diff%=60;
					$secs=$diff;
					}
				}
				else{
					$mins=(int)($diff/60);
					$diff%=60;
					$secs=$diff;
				}
			}
			else{
				$secs=$diff;
			}
			
		//print only the required one ie seconds or min or hours or days
		if(isset($mins))
				if(isset($hours))
					if(isset($days))
						$str=sprintf('%d days %d hrs, %d mins, %d sec ago',$days,$hours,$mins,$secs);
					else
						$str=sprintf('%d hrs, %d mins, %d sec ago',$hours,$mins,$secs);
			 
				else
					$str=sprintf('%d mins, %d sec ago',$mins,$secs);
			else
				$str=sprintf('%d sec ago',$secs);
				
		return $str;
	}

?>
