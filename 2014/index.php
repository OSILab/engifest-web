<?php
include 'data/db.php';

$con = mysql_connect($server,$username,$password);
if(!$con)
{
	echo "Sorry Having trouble connect to server try again later :(";
}
else
{
	mysql_select_db($db_name,$con);
}
?><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" class="js canvas no-touch skrollr skrollr-desktop">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="Content-Language" content="en">
	<link rel='shortcut icon' href='img/Favicon_Engifest.ico' type='image/icon' />
	<title>EngiFest'14</title>
	<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=1000, user-scalable=no">
        <meta name="description" content="Engifest is the annual cultural festival of Delhi Technological University (Formerly Delhi College of Engineering). Engifest is a four-day long cultural extravaganza held in the month of February.It bridges the gap between technical education and creativity. It is a much needed wave of cultural activities, rich in diversity.It is a symbol of achivement and pride and a true testimony to the indomitable spirit, liveliness and sheer energy of youth. It witnesses wide participation from various parts of the country." />
        <meta name="keywords" content="engifest, engifest 2014 , engifest 14 , engifest dtu , engifest dce , dtu fest , dce fest , spandan engifest, battle of bands engifest , soundtrack engifest , natya engifest , nukkad engifest , anushthaan engifest" />
        <meta property="og:title" content="Engifest 14" />
        <meta property="og:image" content="http://www.engifest.dce.edu/img/1533968_444841532308232_2137693751_n.png" />
        <meta property="og:url" content="http://www.engifest.dce.edu" />
        <meta property="og:description" content="Engifest is the annual cultural festival of Delhi Technological University (Formerly Delhi College of Engineering). Engifest is a four-day long cultural extravaganza held in the month of February.It bridges the gap between technical education and creativity. It is a much needed wave of cultural activities, rich in diversity.It is a symbol of achivement and pride and a true testimony to the indomitable spirit, liveliness and sheer energy of youth. It witnesses wide participation from various parts of the country." />

	<div id="fb-root"></div>
<script>
  window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId      : '637532079638975',                        // App ID from the app dashboard
      status     : true,                                 // Check Facebook Login status
      xfbml      : true                                  // Look for social plugins on the page
    });

    // Additional initialization code such as adding Event Listeners goes here
  };

  // Load the SDK asynchronously
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
</head>
<body style="zoom: 1; height: 3484px; overflow: visible;" data-twttr-rendered="true" onload="localStorage.clear();"><div id="fb-root"></div>
<base href=".">



<link rel="stylesheet" type="text/css" href="./data/281FC8A0950474772769C3C2155727A43.css" media="screen, handheld, projection, tv" charset="utf-8">
<link rel="stylesheet" href="./data/fonts.css" media="screen, handheld, projection, tv">
<link rel="stylesheet" href="./data/animations.css" media="screen, handheld, projection, tv">
<link rel="stylesheet" type="text/css" href="css/innerpage.css" media="screen, handheld, projection, tv" charset="utf-8">
<link rel="stylesheet" type="text/css" href="css/lightview.css" />
<link rel="stylesheet" type="text/css" href="css/jquery.mCustomScrollbar.css" />
<link rel="stylesheet" href="css/hector09_sponser.css">

<link href='http://fonts.googleapis.com/css?family=Poiret+One' rel='stylesheet' type='text/css'>



<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="js/jquery.history.js"></script>
<div>
  <div class="topVideo" style="height: 634px;">
    <div class="closeWrap">
      <div class="bg"></div>
      <div class="icon"></div>
    </div>


    <a href="javascript:void()" target="_blank" rel="follow" class="socialIcon fb" onclick="event.preventDefault ? event.preventDefault() : event.returnValue = false; streamPublish('http://www.engifest.dce.edu/','http://www.engifest.dce.edu/img/1533968_444841532308232_2137693751_n.png','ENGIFEST\'14  ','Delhi Technological University','Welcome to The Engifest, the brainchild of creativity, hard work and energy! Engifest is the annual intercollege cultural festival celebrated in DTU. It symbolizes everything what college life is about – and much more!');">
      <div class="bg"></div>
      <div class="icon"></div>
    </a>
<!--
    <a href="javascript:void()" target="_blank" rel="follow" class="socialIcon twitter" onclick="'event.preventDefault ? event.preventDefault() : event.returnValue = false; window.open('https://www.twitter.com/share?text=Welcome to The Engifest 14, the brainchild of creativity, hard work and energy! Engifest is the annual intercollege cultural festival celebrated in DTU. It symbolizes everything what college life is about – and much more!&url=http://www.engifest.dce.edu','Twitter','height=300,width=600');">

      <div class="bg"></div>
      <div class="icon"></div>
    </a>
-->
	<div>
		<!-- need to add a poster url -->
		<video  preload="none" id="teaser_video" controls loop poster="">
			<source src="test/test3.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>
	</div>
	<!--
    <div class="right" style="">
      <h2>Engifest ' 14</h2>
      <h3>Engineers Megafest</h3>
      <p></p>
    </div>
	-->
  </div>
  <!--bane94-->
  <div id='loader' class='loader'>
	<div class='top'>
		<div style='width:383px;margin:-5px auto;'><img src="data/logo.png" /></div>
	</div>
	<div  class='text'>
		<div id='bane94_loadtrail' ><span id='bane94_percent' style='float:left;color:white;'>18%</span><img src='img/loading_small.gif' style='float:right;'/></div>
	</div>
  </div>
  <style>
	#register-form {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.93);
	z-index: 999999;
	font-family:'pf_din_text_cond_proregular';
	font-size:14pt;
	font-weight:bold;
	display: none;
	}
	#register-form  #form-container
	{
		position: relative;
		top: 75px;
		width: 60%;
		min-height: 300px;
		background: white;
		margin: auto;
		overflow:hidden;
	}
	#form-container .form-sub{
		width: 90%;
		min-height: 35px;
		margin: 5px auto;
	}
	#form-container .form-sub input{
		color:#f70b59;
	}
	#form-container .form-sub .form-sub-label{
		width:250px;
		display:inline-block;
	}

	.register-close
	{
		float: right;
		font-size: 24px;
		font-weight: bold;
		line-height: 1;
		color: #000000;
		text-shadow: 0 1px 0 #ffffff;
		opacity: 0.2;
		cursor: pointer;
	}
	.form-sub input[type='submit']:hover
	{
		color:#f70b59;
	}
	.uid-close
	{
		float: right;
		font-size: 20px;
		font-weight: bold;
		line-height: 1;
		color: #000000;
		text-shadow: 0 1px 0 #ffffff;
		opacity: 0.2;
		cursor: pointer;
		display:inline-block;
	}
	.register-close:hover , .uid-close{
	  color: #000000;
	  text-decoration: none;
	  cursor: pointer;
	  opacity: 0.5;
	  filter: alpha(opacity=50);
	}
	#id-show
	{
		margin-left:200px;
		float:left;
		width:67%;
		display:inline-block;
	}
	#id-show > div
	{
		background:rgba(188,188,188,0.6);
		border-radius:1px;
		padding:2px 5px;
		float:right;
		margin:3px;
		display:inline-block;
	}
	#id-show > div .uid-name
	{
		color:#f70b59;
		display:inline-block;
		margin-right:2px;
	}
	.getengiid
	{
	text-align: center;
	color: white;
	font-size: 29pt;
	width: 50%;
	background: #f70b59;
	padding: 10px 0px 10px 0px;
	border-radius: 10px;
	margin-left: 25%;
	cursor: pointer;
	-webkit-transition: color .6s,background .6s;
	-o-transition: color .6s,background .6s;
	-moz-transition: color .6s,background .6s;
	transition: color .6s,background .6s;
	}
	.getengiid:hover{background:white;color: #f70b59}
	.form-sub input[type="submit"]
	{
		color:white;
	}
	.regclosebutton{
		width: 54px;
		height: 54px;
		position: absolute;
		top: 0px;
		right: 0px;
		background: rgba(255,255,255,.3);
		background-repeat: no-repeat;
		background-image: url(data/icons.png);
		background-position: -225px -169px;
		cursor: pointer;
	}
  </style>
  <div id="register-form">
<div class="regpanel" id="regpanel">
<div class="regclosebutton" onclick="document.getElementById('register-form').click();"></div>
  <div style="color: white;font-size: 56pt;font-family: Calibri;text-align: center;margin-top: 36px;">REGISTRATION</div>
  <div class="getengiid" style="margin-bottom: 10px;" onclick="window.open('http://www.foreseegame.com/PromotionalActivities.aspx?paramPro=DelhiTechUniversity','Get EngiID','height=400,width=600')">Get your EngiFest ID&nbsp;&amp; Entry Pass</div>
  <div style="font-family:Calibri;width: 50%;margin-left:  25%;text-align: left;color: white;font-size:  14pt;margin-bottom: 5%;padding-top: 20px">
  GUIDELINES FOR ATTENDIES &amp; PARTICIPANTS:<br>
1.	To attend Engifest 2014, you must have an Engifest Entry Pass and a valid college ID.<br>
2.	If you have already registered on Foreseegame.com, login with your ID and password to get Engifest ID and Entry Pass.<br>
3.	Make sure that you enter Engifest IDs of all the team members while registering for group events separated by semicolon(;).<br>
4.	In case of any doubts, please contact the event coordinators before registration.<br>
5.	Engifest will provide accommodation to participants, details of which will be put up on the website later.<br>
6.	Engifest reserves the right to deny entry to any person without stating any reason.<br>

</div>
  <div class="getengiid" onclick="document.getElementById('form-container').style.display = 'block';document.getElementById('donthaveengifestid').style.display = 'block';document.getElementById('regpanel').style.display = 'none';">Register for events with your Engifest ID</div>
</div>
<?php
	$queryevent = mysql_query("SELECT name FROM event_list WHERE register > 0 ");
	$string = "";
	//to be fed to local storage
	$events_main = array();
	$events = array();
	$events_sub = array();
	while($row = mysql_fetch_array($queryevent))
	{
		$events[count($events)] = strtolower($row['name']);
		$arr = explode("-",$row['name']);
		if(count($arr) > 1)
		{
			$events_sub[count($events_sub)] = strtolower($row['name']);
		}

		if(!in_array(strtolower($arr[0]),$events_main))
		{
			$events_main[count($events_main)] = strtolower($arr[0]);
		}
	}
	foreach($events_main as $item)
	{
		$string .= $item ."~";
	}
	echo "<script>localStorage['eventsmain'] = '$string';</script>";
	echo "<input type='hidden' value='$string' id='mainEventslist'>";

	$string = "";
	foreach($events_sub as $item)
	{
		$string .= $item ."~";
	}
	echo "<script>localStorage['eventssub'] = '$string';</script>";
	echo "<input type='hidden' value='$string' id='subEventslist'>";
?>





	<div id="form-container" style="display:none">
		<div id="groupreg" style="width:100%;height:100%;padding-top:20px;">
			<div class="form-sub" style="border-bottom:1px solid gray">
				<span>Register For Engifest'14 Events</span><span class="register-close">x</span>
			</div>
			<div class="form-sub">
				<div class="form-sub-label">	<label for="register-event">
						Select Event:<span style="color:red">*</span>
					</label>
				</div>
				<select id="register-eventMain" style="width:200px;"></select>
			</div>
			<div class="form-sub">
				<div class="form-sub-label" >
					<label for="register-category">
						Select category:<span style="color:red">*</span>
					</label>
				</div>
				<select id="register-eventSub" style="width:200px;"></select>
			</div>
			<div class="form-sub">
				<div class="form-sub-label" ><label for="register-name">Enter your Engifest Id(s) :<span style="color:red">*</span>
                                <br><cite>[ ID's separated by semicolon(;) ]</cite>
                                </label></div>
				<input type="text" id="register-id" placeholder="Ids separated by semicolon(;)">
				<a href="javascript:window.open('http://www.foreseegame.com/PromotionalActivities.aspx?paramPro=DelhiTechUniversity','Get EngiID','height=400,width=600')" title="Get your ID" style="color:blue;cursor:pointer;"><u>Get your ID</u></a>
				<br>
				<div id="id-show"></div>
			</div>
			<div class="form-sub">
				<div class="form-sub-label" >
					<label for="register-email">
					Enter your email id:<span style="color:red">*</span>
				<br><cite>[ Team Leader Email for Groups ]</cite>
                                </label>
				</div><input type="email" id="register-email" placeholder="your email id"><br>
			</div>
			<div class="form-sub">
				<div class="form-sub-label" >
					<label for="register-groupname">Enter your Group Name:<br><cite>[<span style="color:red">*</span> Only for group events ]</cite></label>
				</div>
				<input type="text" id="register-groupname" placeholder="Enter your Group Name">
			</div>

			<div class="form-sub">
				<input type="submit" id="register-grouppsubmit" value="Submit" style="margin-right:10px;">
			</div>
			<div class="form-sub">
				<div class="form-sub-label" style="width:60%;">
					<span id="register-groupnotification" style="color:red;"></span>
				</div>
			</div>
	</div>

	</div>
	<div class="getengiid" onclick="document.getElementById('form-container').style.display='none'; document.getElementById('donthaveengifestid').style.display = 'none'; document.getElementById('regpanel').style.display = 'block';" id="donthaveengifestid" style="display:none;position:absolute;top:80%;">Dont have your Engifest ID, Get it now!</div>
  </div>
  <style>
	div#webteam-content
	{
		width: 50%;
		height: 100%;
		position: fixed;
		left: 110%;
		top: 0;
		background: #4a041b;
		z-index: 99999;
		display:block;
	}
	div#webteam-content .close{
		position: relative;
		width: 55px;
		height: 55px;
		top: 5px;
	}
	div#webteam-content .close:hover span.close-icon{
		-webkit-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg);
	}
	div#webteam-content .close span.close-icon
	{
		background: url('data/icons.png') no-repeat scroll -225px -55px;
		float: left;  position: relative;  right: 0;  width: 55px;  height: 55px;
		-webkit-transition: all 0.5s ease;
		-moz-transition: all 0.5s ease;
		-o-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}
	div#webteam-content .content
	{
		width: 80%;
		min-height: 100px;
		margin: auto;
	}
	div#webteam-content .content .inner-content{
		width:100%;
		display:inline-block;
		color: #fff;
		text-align: center;
		font-family: 'pf_synch_proregular';
	}
	div#webteam-content .content .inner-content .inner-content-header{
		font-size: 16pt;
		border-bottom: 1px solid pink;
		display:inline-block;
		width:100%;
	}
	div#webteam-content .content .inner-content .inner-content-content{
		display:inline-block;
		text-align:justify;
		width:100%;
		padding-top:10px;
	}
	div#webteam-content .content .inner-content .inner-content-content:after{
		 content: "";
		  width: 100%;
		  display: inline-block;
	}
	div#webteam-content .content .inner-content .inner-content-content .people{
		display:inline-block;
		width: 130px;
		height: 130px;
		background: #fff;
		border-radius: 75px;
		border:pink solid 3px;
		-webkit-box-shadow:white 0 0 8px;
		-moz-box-shadow:white 0 0 8px;
		-o-box-shadow:white 0 0 8px;
		box-shadow:white 0 0 8px;
	}
	/*div#webteam-content .content .inner-content .inner-content-content .people > div{
		background: rgba(255,255,255,0.8);
		position: relative;
		top: 37%;
		margin: auto;
		width: 80%;
		opacity:0;
		-webkit-transition: all 0.5s ease;
		-moz-transition: all 0.5s ease;
		-o-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}
	div#webteam-content .content .inner-content .inner-content-content .people:hover > div{
		opacity:1;
	}*/
  </style>
  <div id="webteam-content">
	<div class="close" >
		<span class="close-icon"></span>
	</div>

	<div class="content" >
		<div class="inner-content">
			<div class="inner-content-header">Web Developers</div>
			<div class="inner-content-content">
					<div class="people" ><!-- <div><a href="" style="color:#f70b59;">ABHINAV DAHIYA</a></div> --></div>
					<div class="people" ><!-- <div><a href="" style="color:#f70b59;">A V MINHAZ</a></div> !--></div>
					<div class="people" ></div>
			</div>
		</div>
		<div class="inner-content">
			<div class="inner-content-header">Graphic Designers</div>
			<div class="inner-content-content">
					<div class="people" ></div>
					<div class="people" ></div>
					<div class="people" ></div>
			</div>
		</div>
		<div class="inner-content">
			<div class="inner-content-header">Content Managers</div>
			<div class="inner-content-content">
					<div class="people" ></div>
					<div class="people" ></div>
					<div class="people" ></div>
			</div>
		</div>

	</div>
  </div>
  <!--bane94-->
   <style type="text/css">
           #feminaimg {
      position: absolute;
      top: 188px;
      right: 0px;
      width: 348px;
      z-index: 100;
      cursor:pointer;
	  -webkit-transition:width ease-out 0.3s;
	  -moz-transition:width ease-out 0.3s;
	  -o-transition:width ease-out 0.3s;
	  transition:width ease-out 0.3s;
	  }
	  #feminaimg:hover{
		width:370px;
	  }
	  #sponserlink:hover {
padding-left: 20px;
}
#sponserlink {
position: fixed;
top: 50%;
right: 0px;
background: #f70b59;
z-index: 1000;
padding: 10px;
border-radius: 10px 0px 0px 10px;
color: white;
font-weight: bold;
-webkit-transition: padding .5s;
cursor: pointer;
}
#sponserlink a{text-decoration:none}
   </style>
   
   <div id="sponserlink"><a href="http://www.engifest.dce.edu/sponser.php">Sponsors</a></div>
  <div id="mainWrapper">
  <img src="Main_Pic.png" title="Register for Femina Miss India 2014 Auditions New Delhi" id="feminaimg" onclick="window.location.href='femina/';">
    <div id="skrollr-body">
      <div class="video animatedBlock" style="top: 1119.4px;">
        <video id="topVideo" class="bgVideo" width="100%" height="1080" src="test/Comp1.mp4"   loop muted style="position:relative;left:30%;">
		  Your browser does not support the video tag.
        </video>
		<audio id="bgMusic" src="<?php
			$audio = array('Song 1.mp3','Song 2.mp3','Daybreak (GoPro HERO3 Edit).mp3');
			$ran = rand(0,count($audio)-1);

			echo $audio[$ran];
		?>" controls="false" loop ></audio>
      </div>
      <div class="main">
        <div class="bottom"></div>

        <div class="main_blocks">
          <div class="triangle_left animatedBlock" style="top: 752.1999999999999px; left: -380.59999999999997px;"></div>
          <div class="triangle2 animatedBlock" style="top: -621px;"></div>
          <div class="triangle1 animatedBlock" style="top: 298.08px; left: -298.08px;"></div>
        </div><!--main_wrap-->
        <div id="header">
          <div class="wrapper">
            <div class="header-social" >
               <ul>
                      <li class="fb">
                        <div class="fb-like" data-href="https://www.facebook.com/engifest" data-width="100px" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
                      </li>
                      <li class="twitter">

                      </li>
                      <li class="behance" style="overflow-y:hidden">
                        <div class="fb-share-button" data-href="http://www.engifest.dce.edu" data-width="100px" data-type="button"></div>
                      </li>
                    </ul>
            </div><!--header-social-->
            <div class="logo">
              <h1>
                <a href="index.htm">
                  <img src="./data/logo.png" height="52" width="244">
                </a>
              </h1>
            </div>
            <div class="moto animatedBlock" style="top: -1863px;">
              <div class="ribbon">
                <span class="black">LET US</span>
                <span class="pink">INTRODUCE</span>
              </div>
              <h2><span class="pink">THIS IS</span><span class="white">EngiFest'14</span></h2>
              <div class="arrow"><span></span><font style="color:#f70b59;">13'Feb - 16'Feb</font><br>THE COOLEST CULTURAL FESTIVAL OF INDIA.</div>

             <div class="hiring">
								<div class="over"></div>
								<a href="javascript: registershow();" target="_blank">
									Reg'ns are <span>OPEN</span>
									<div>
										<div class="border"></div>
										Register now
									</div>
								</a>
							</div>
						</div>
            <div id="playReel" class="animatedBlock" style="right: -521.8px; top: -762.6px;">
              <div class="play" style="background-position: 0px 0px;">
                <div class="text">
                  <span>SHOW</span>
                  <span class="pink">TEASER</span>
                </div>
              </div>
            </div>
            <div class="caseStudies-text animatedBlock" style="top: -1085.6px;">
			  <h2><span>Endless</span> <br><span class="pink">Energetic </span> <br><span class="blackBg">Enigmatic</span></h2>
			  
			  
              <ul class="tags"><li><span>#</span>GreenTeck</li><li><span>#</span>Pratibimb</li>
<li><span>#</span>Saltare</li><li><span>#</span>Nrityangana</li><li><span>#</span>Parchhayi</li>             <!--     <li  onclick="innerpageload('ShowCases');" style='cursor: pointer'><span>#</span>SHOWCASES</li>
                <li  onclick="innerpageload('IDEAS');" style='cursor: pointer'><span>#</span>IDEAS</li>
                <li  onclick="innerpageload('DESIGN');" style='cursor: pointer'><span>#</span>360<sup>o</sup></li>
              <li><span>#</span>VIDEO</li>
                <li><span>#</span>CAMPAIGNS</li> -->
              </ul>
			  
			  <style type="text/css">
				.hector09_suddensldie{
					position: absolute;
					top: 50px;
					right: 20px;
				}
				.hector09_suddensldie img{
					position: absolute;
					top: 0px;
					right: 20px;
					-webkit-transition: right .5s ease-out,height .5s ease-out,left .5s ease-out,top .5s ease-out;
				}
				</style>
				
			  
            </div>
          </div>
        </div>
        <div class="caseStudies">
          <div class="wrapper">
		  <!-- Engifest diamond 1 [content: About ] -->
		  <!-- 
			    **Edit summary** 
				**hector09: 
					>slide1 changed to About us 
		  -->
            <div class="items animatedBlock skrollable skrollable-between" data-0="top:100px;" data-2500="top:-500px;" style="top: -494.88px;">
              <div class="item item-1" rel="1" image-count="0">
                <div class="blocks-wrap">
                  <div class="block1 block openBlock skrollable skrollable-after" data-0="left:-200px;" data-600="left:-1px" style="left: -1px;">
                    <div class="bg"></div>
                    <div class="img" style="background:url('data/philadelphia_thumb.png')">
                      
                    </div>
                  </div>
                  <div class="block2 block animatedBlock skrollable skrollable-after" data-0="top:-200px" data-600="top:0" style="top: 0px;">
                    
                  </div>
                  <div class="block3 block animatedBlock openBlock skrollable skrollable-after" data-0="right:-200px" data-600="right:0" style="right: 0px;">
                    <div class="bg"></div>
                    <div class="shadow"></div>
                    <div class="side1">
						<div class="text" style="top: 106px; display: inline-block;">
						  <h3 style="color:#f70b59;text-shadow: black 1px 1px;">Glimpses Of</h3>
						  <h2 style="text-shadow: black 2px 2px;">Engifest'13</h2>
						</div>
                    </div>
                    <!--div class="side2">
                    </div-->
                  </div>
                  <div class="block4Wrap skrollable skrollable-after" data-0="right:200px;top:30px;" data-600="right:0;top:0;" style="right: 0px; top: 0px;">
                    <div class="block4 block">
                      <div class="bg"></div>
                      <div class="bg_over"></div>
                      <div class="box"></div>
                      <div class="shadow"></div>
                    </div>
                  </div>
                </div>
				<div class="texts">
					<div class="textBlock1" style="display: block; opacity: 0;">
					<!-- hector09: we shall place details or Ads here -->
					<p id='hector09_db1_detail'>
						A <span>pioneer in technical education and research</span>, <strong>Delhi Technological University</strong> (formerly <strong>Delhi College of Engineering</strong>) has marched from strength to strength throughout its illustrious history spanning <span>72 glorious years.</span> 
					</p>
					</div>
					<div class="textBlock2" style="opacity: 0; display: none;">
						<div class="cnt" style="position: relative;">
							<h3 style="position: absolute;top: -30px;">Delhi Technological University</h3>
							<h4 style="color: white">presents Engifest'14</h4>
						</div>
					</div>
				</div>
                <div class="player_bg player_bg1"></div>
                <div class="player_bg player_bg2" style=""></div>
                <style type="text/css">
					/*div slider: need to be placed in external style sheet*/
					.bane94-slides {
					  display: none
					}

					.bane94-slides .slidesjs-navigation {
					  margin-top:3px;
					}

					.bane94-slides .slidesjs-previous {
					  position:absolute;
					  top:0;left:0;
					  width:33px;height:100%;
					  background-image:url(img/arrows.png);
					  background-repeat:no-repeat;
					  background-position:0;
					  z-index:20;
					}

					.bane94-slides .slidesjs-next {
					  position:absolute;
					  top:0;left:95%;
					  width:33px;height:100%;
					  background-image:url(img/arrows.png);
					  background-position:100%;
					  background-repeat:no-repeat;
					  z-index:20;
					}

					.slidesjs-pagination {
					  margin: 6px 0 0;
					  float: right;
					  list-style: none;
					}
					.item-1 .slidesjs-pagination{
						position:absolute;
						top:95%;
						z-index:20;
					}
					.item-1 .slidesjs-next , .item-1 .slidesjs-previous{
						display:none;
					}
					.slidesjs-pagination li {
					  float: left;
					  margin: 0 1px;
					}

					.slidesjs-pagination li a {
					  display: block;
					  width: 13px;
					  height: 0;
					  padding-top: 13px;
					  background-image: url(img/pagination.png);
					  background-position: 0 0;
					  float: left;
					  overflow: hidden;
					}

					.slidesjs-pagination li a.active,
					.slidesjs-pagination li a:hover.active {
					  background-position: 0 -13px
					}

					.slidesjs-pagination li a:hover {
					  background-position: 0 -26px
					}

					.bane94-slides a:link,
					.bane94-slides a:visited {
					  color: #333
					}

					.bane94-slides a:hover,
					.bane94-slides a:active {
					  color: #9e2020
					}

					.navbar {overflow: hidden}
					.container { margin: 0 auto;width: auto}
                	.mi_row{font-family: 'Arial';font-size: 14px;}
                	.mi_row .mi_col{padding: 0px;margin: 0px;float: left;}
                	.col4{width: 40%;}
                	.col6 {width: 60%;}
                	.col3 {width: 30%;}
                	.col7{width: 70%;}
                	.mi_pnk {color: #cb0948;}
                	
                </style>
                <div class="videoWrap" style="display: none; opacity: 0;" onclick="return false;">
				<div class="container" >
				<!-- changes by hector09 -->
				<!-- change this stylesheet and merge it with original style sheet -->
				<style type="text/css">
					.hector09_slide
					{
						width: 709px;
						height: 400px;
						margin: 0px;
						background-image: url(img/h09_bg1.png);
						background-repeat: no-repeat;
						position: relative;
						overflow: hidden;
						cursor: pointer;
						-webkit-transition: background-image .5s ease-out;
						-o-transition: background-image .5s ease-out;
						-moz-transition: background-image .5s ease-out;
						transition: background-image .5s ease-out;
						z-index: 100;
					}
					.hector09_slide_detail
					{
						height: 400px;
						margin: 0px;
						position: absolute;
						top: 0px;
						right: 0px;
						opacity: .6;
						background: rgba(255,255,255,0.6);
						color: black;
						width: 70%;
						cursor: pointer;
						-webkit-transition: opacity .4s ease-out;
						-o-transition: opacity .4s ease-out;
						-moz-transition: opacity .4s ease-out;
						transition: opacity .4s ease-out;
						overflow: hidden;
						font-size:14pt;
						font-family: pf_din_text_cond_proregular;
						-webkit-box-shadow: 0px 0px 50px rgb(255,255,255);
						-o-box-shadow: 0px 0px 50px rgb(255,255,255);
						-moz-box-shadow: 0px 0px 50px rgb(255,255,255);
						box-shadow: 0px 0px 50px rgb(255,255,255);
						padding: 10px;
						font-weight: bold;
					}
					.hector09_slide_detail span{
					font-weight: bold;
					color: #cb0948;
					}
					.hector09_slide:hover>.hector09_slide_detail{opacity:1;}
					.hector09_slide_detail_data{padding: 10px;}
					.hector09_slide_toolbar{
						position: absolute;
						bottom: 24px;
						left: 0px;
						padding: 10px;
						width: 100%;
					}
					.hector09_slide_date
					{
						float: left;
						width: 40%;
						color: #cb0948;
						font-size: 20pt;
						font-family: pf_din_text_cond_proregular;
					}
					.hector09_slide_viewmore
					{
						float: right;
						width: 40%;
						text-align: right;
						padding-right: 20px;
					}
					.hector09_slide_detail h2{font-size: 38pt;}
					
					.bane94-thumb
					{
						width: 150px;
						height: 150px;
						background: rgba(255,255,255,0.8);
						margin: 0px 5px 10px 5px;
						float: left;
						overflow: hidden;
					}
					.bane94-thumb .bane94-thumb_detail
					{
						width: 100%;
						min-height: 30px;
						position: relative;
						top: 110px;
						color: #f70b59;
						font-family: 'pf_din_text_cond_proregular';
						font-size: 18pt;
						text-align: center;
						font-weight: bold;
						background: rgba(0,0,0,0.7);
						-webkit-transition: top 0.5s ease-out;
						-moz-transition: top 0.5s ease-out;
						-o-transition: top 0.5s ease-out;
						transition: top 0.5s ease-out;
					}

					.hector09tmploading{
						width: 100%;
						height: 100%;
						margin: 0px;
						padding: 0px;
						background: white;
						background-image: url(http://www.teachinlondon.net/images/til/popup/loading.gif);
						background-repeat: no-repeat;
						background-position: center;
						opacity: .5;
						display:none;
					}
				</style>
				<!-- stylesheet ends here -->
					<div class='bane94-slides'>
						<img src="img/Main Gallary/DSC_0033 copy.jpg">
						<img src="img/Main Gallary/DSC_0342 copy.jpg">
						<img src="img/Main Gallary/DSC_0472 copy.jpg">
						<img src="img/Main Gallary/DSC_0960 copy.jpg">
						<img src="img/Main Gallary/IMG_1010 copy.jpg">
						<img src="img/Main Gallary/IMG_1311 copy.jpg">
						<img src="img/Main Gallary/IMG_4088 copy.jpg">
						<a href="#" class="slidesjs-previous slidesjs-navigation"></a>
						<a href="#" class="slidesjs-next slidesjs-navigation"></a>
					</div>
				</div>
                </div>
                <div class="video-bar" style="display: none; opacity: 0;">
                  <div class="fun_facts">
                    <span></span>
                    <div class="slides">
                      <ul>
                        <li class="active">Where Amazing Happens!!</li>
                      </ul>
                    </div>
                  </div>
                  <div class="social">
                    <ul>
                      <li class="fb">
                        <a href="http://www.engifest.dce.edu/" target="_blank" rel="follow" onclick="event.preventDefault ? event.preventDefault() : event.returnValue = false;streamPublish('http://www.engifest.dce.edu/','http://www.engifest.dce.edu/img/1533968_444841532308232_2137693751_n.png','ENGIFEST\'14  ','Delhi Technological University','Welcome to The Engifest, the brainchild of creativity, hard work and energy! Engifest is the annual intercollege cultural festival celebrated in DTU. It symbolizes everything what college life is about – and much more!');">
                           <span></span>
                           <div></div>
                        </a>
                      </li>
                      <!--<li class="twitter">
                                  <a href="http://www.engifest.dce.edu/ target="_blank" rel="follow" onclick="event.preventDefault ? event.preventDefault() : event.returnValue = false;  window.open(&#39;https://www.twitter.com/share?text=Welcome to The Engifest'14, the brainchild of creativity, hard work and energy! Engifest is the annual intercollege cultural festival celebrated in DTU. It symbolizes everything what college life is about – and much more!&amp;url=http://www.engifest.dce.edu&#39;,&#39;Twitter&#39;,&#39;height=300,width=600&#39;);">
                                    <span></span>
                                    <div></div>
                                  </a>
                      </li>-->
                    </ul>
                  </div>
                </div>
                <div class="button openBlock">
                  <div class="bg"></div>
                  <div class="bg_over"></div>
                  <div class="text go">GO</div>
                  <div class="img"></div>
                </div>
              </div>
              <div class="item item-2" rel="2" image-count="0">
                <div class="blocks-wrap">
                  <div class="block1 block openBlock skrollable skrollable-after" data-0="left:-200px" data-950="left:-1px" style="left: -1px;">
                    <div class="bg"></div>
                    <div class="img" style="background:url('data/Peloponnese_thumb.png')">
                      
                    </div>
                  </div>
                  <div class="block2 block skrollable skrollable-after" data-0="top:-200px" data-950="top:0" style="top: 0px;">
                    
                  </div>
                  <div class="block3 block openBlock skrollable skrollable-after" data-0="right:-200px" data-950="right:0" style="right: 0px;">
                    <div class="bg"></div>
                    <div class="shadow"></div>
                    <div class="side1">
                      <div class="text" style="top: 96px;height:60px;">
                      <h3 style="color:#f70b59;text-shadow: black 1px 1px;">Competitive/Formal</h3>
                      <h2 style="color:white;text-shadow: black 2px 2px;">“EVENTS”</h2>
                    </div>
                    </div>
                    
                  </div>
                  <div class="block4Wrap skrollable skrollable-after" data-0="right:200px;top:30px;" data-950="right:0;top:0;" style="right: 0px; top: 0px;">
                    <div class="block4 block">
                      <div class="bg"></div>
                      <div class="box"></div>
                      <div class="shadow"></div>
                    </div>
                  </div>
                </div>
								<div class="texts">
									<div class="textBlock1">
										<p>Engifest comprises of several interesting events covering a vast area of interest, so everyone is in for a treat! Sit back, relax and witness some of the most exciting events you will ever see!</p>
									</div>
									<div class="textBlock2" style="display: none;">
										<div class="cnt" style="position: relative; top: 118.5px;">
											<h3 style="position: absolute;top: -30px;">Engifest'14</h3>
											<h4 style="color: white">Events</h4>
										</div>
									</div>
								</div>
                <div class="player_bg player_bg1"></div>
                <div class="player_bg player_bg2"></div>
                <div class="videoWrap" style="display: none; opacity: 0;" onclick="return false;">
                  <div class="container" >
				  
					<div class='bane94-slides'>
					<div class='mi_row hector09_slide' current='1' style="background:url('img/BG_Gallary.png')">
							<div style="width: 91%;height: 80%;margin: auto;position: relative;top: 10%;">
								<div class="bane94-thumb" onclick="innerpageload('Switch The Funk Up');" style="background-image:url('img/STFU/STFU_Thumbnail.png');">
									<div class="hector09tmploading"></div>
									<div class="bane94-thumb_detail">STFU</div>
								</div>
								<div class="bane94-thumb" onclick="innerpageload('Spandan');" style="background-image:url('img/Spandan/Spandan_Thumbnail12.png');">
									<div class="hector09tmploading"></div>
									<div class="bane94-thumb_detail">Spandan</div>
								</div>
								
								<div class="bane94-thumb" onclick="innerpageload('Paridhan');" style="background-image:url('img/Paridhan/Paridhan_Thumbnail.png');">
									<div class="hector09tmploading"></div>
									<div class="bane94-thumb_detail">Paridhan</div>
								</div>
								
								<div class="bane94-thumb" onclick="innerpageload('Anushthaan');" style="background-image:url('img/Anushthaan/Anushthaan_Thumbnail.png');">
									<div class="hector09tmploading"></div>
									<div class="bane94-thumb_detail">Anushthaan</div>
								</div>
								<div class="bane94-thumb" onclick="innerpageload('Arpeggio - Battle Of The Bands');" style="background-image:url('img/BOB/BOB_Thumbnail.png');">
									<div class="hector09tmploading"></div>
									<div class="bane94-thumb_detail">Arpeggio</div>
								</div>
								<div class="bane94-thumb" onclick="innerpageload('Natya');" style="background-image:url('img/Natya/Natya_Thumbnail.png');">
									<div class="hector09tmploading"></div>
									<div class="bane94-thumb_detail">Natya</div>
								</div>
								<div class="bane94-thumb" onclick="innerpageload('Nukkad');" style="background-image:url('img/Nukkad/Nukkad_Thumbnail.png');">
									<div class="hector09tmploading"></div>
									<div class="bane94-thumb_detail">Nukkad</div>
								</div>
								<div class="bane94-thumb" onclick="innerpageload('Soundtrack');" style="background-image:url('img/Soundtrack/Soundtrack_Thumbnail.png');">
									<div class="hector09tmploading"></div>
									<div class="bane94-thumb_detail">Soundtrack</div>
								</div>
								
							</div>
					</div>
						<div class='mi_row hector09_slide' current='2' style='background-image: url(img/h09_bg3.png);'>
							<div class='hector09_slide_detail'>
								<h2 style='text-align: center;margin-top: 20px;color: #cb0948;font-family: pf_din_text_cond_proregular;'>		Soundtrack
								</h2>
								<br>
								<div class='hector09_slide_detail_data'>
									Engifest is one of the largest college cultural festivals of the country. A four-day festival held towards the middle of February, it is a student-run non-profit organization which caters primarily for youth. Engifest includes to a variety of events, such as car stunts, cultural performances, live wire, star night, rock shows,plays, dances, drag shows and others. In the past Engifest has been attended by Parikrama, Euphoria, and artiste like Hard Kaur and Shibani Kashyap.
									<div class="hector09_slide_toolbar">
										<div class="hector09_slide_date">
											13th Feb'14
										</div>
										<div class="hector09_slide_viewmore">
											<input type="submit" id="viewmorebutton" name="viewmorebutton" value="view more!" onclick="innerpageload('Soundtrack')">
										</div>
									</div>
								</div>
							</div>
						</div>
						<a href="#" class="slidesjs-previous slidesjs-navigation" style="display:none"></a>
						<a href="#" class="slidesjs-next slidesjs-navigation" style="display:none"></a>
					</div>
				</div>
                </div>
                
                <div class="video-bar">
                  <div class="fun_facts">
                    <span></span>
                    <div class="slides">
                      <ul>
                        <li class="active">Explore Your Possibilities</li>
                      </ul>
                    </div>
                  </div>
                <div class="social">
                    <ul>
                      <li class="fb">
                        <a href="http://www.engifest.dce.edu/" target="_blank" rel="follow" onclick="event.preventDefault ? event.preventDefault() : event.returnValue = false;streamPublish('http://www.engifest.dce.edu/','http://www.engifest.dce.edu/img/1533968_444841532308232_2137693751_n.png','ENGIFEST\'14  ','Delhi Technological University','Welcome to The Engifest, the brainchild of creativity, hard work and energy! Engifest is the annual intercollege cultural festival celebrated in DTU. It symbolizes everything what college life is about – and much more!');">
                           <span></span>
                           <div></div>
                        </a>
                      </li>                     
					 <!-- 
					 <li class="twitter">
						<a href="http://www.engifest.dce.edu/" target="_blank" rel="follow" onclick="event.preventDefault ? event.preventDefault() : event.returnValue = false; window.open(&#39;https://www.twitter.com/share?text=Welcome to The Engifest'14, the brainchild of creativity, hard work and energy! Engifest is the annual intercollege cultural festival celebrated in DTU. It symbolizes everything what college life is about – and much more!&amp;url=http://www.engifest.dce.edu&#39;,&#39;Twitter&#39;,&#39;height=300,width=600&#39;);">
                                      <span></span>
                                      <div></div>
                        </a>
                      </li>--->
                    </ul>
                  </div>
                </div>
                <div class="button openBlock">
                  <div class="bg"></div>
                  <div class="bg_over"></div>
                  <div class="text go">GO</div>
                  <div class="img"></div>
                </div>
              </div>
              <div class="item item-3" rel="3"image-count="0">
                <div class="blocks-wrap">
                  <div class="block1 block openBlock skrollable skrollable-after" data-0="left:-200px" data-1300="left:-1px" style="left: -1px;">
                    <div class="bg"></div>
                    <div class="img" "background:url('data/zewa_thumb.png')">
                    </div>
                  </div>
                  <div class="block2 block skrollable skrollable-after" data-0="top:-200px" data-1300="top:0" style="top: 0px;">
                    
                  </div>
                  <div class="block3 block openBlock skrollable skrollable-after" data-0="right:-200px" data-1300="right:0" style="right: 0px;">
                    <div class="bg"></div>
                    <div class="shadow"></div>
                    <div class="side1">
                      <div class="text" style="top: 80px;height:60px;">
                      <h3 style="color:#f70b59;text-shadow: black 1px 1px;">Engifest'14</h3>
                      <h2 style="text-shadow: black 2px 2px;">"Informal events"</h2>
                    </div>
                    </div>
                    
                  </div>
                  <div class="block4Wrap skrollable skrollable-after" data-0="right:200px;top:30px;" data-1300="right:0;top:0;" style="right: 0px; top: 0px;">
                    <div class="block4 block">
                      <div class="bg"></div>
                      <div class="bg_over"></div>
                      <div class="box"></div>
                      <div class="shadow"></div>
                    </div>
                  </div>
                </div>
				<div class="texts">
					<div class="textBlock1">
						<p></p>
					</div>
					<div class="textBlock2" style="display: none;">
						<div class="cnt" style="position: relative; top: 118.5px;">
							<h3 style="position: absolute;top: -30px;">Engifest'14</h3>
							<h4 style="color: white">Informal Events</h4>
						</div>
					</div>  
				</div>
                <div class="player_bg player_bg1"></div>
                <div class="player_bg player_bg2"></div>
                <div class="videoWrap" style="display: none; opacity: 0;" onclick="return false;">
                 <div class="container" >
						<div class='bane94-slides'>
						 <div class='mi_row hector09_slide' current='1' style="background:url('img/BG_Gallary.png')">
							<div style="width: 91%;height: 80%;margin: auto;position: relative;top: 10%;">
								<h2>Details To be updated Soon</h2>
							</div>
						</div>
						<div class='mi_row hector09_slide' current='1' style="background:url('img/BG_Gallary.png')">
							<div style="width: 91%;height: 80%;margin: auto;position: relative;top: 10%;">
								<h2>Details To be updated Soon</h2>
							</div>
						</div>
						<!--div class='mi_row hector09_slide' current='2' style='background-image: url(img/h09_bg3.png);'>
							<div class='hector09_slide_detail'>
								<h2 style='text-align: center;margin-top: 20px;color: #cb0948;font-family: pf_din_text_cond_proregular;'>		Go - karting
								</h2>
								<br>
								<div class='hector09_slide_detail_data'>
									BOB brings together rock lovers from all over the country for an electrifying experience, courtesy some of the most talented amateur rock bands in the land. The day long rock fest also witnesses scintillating performances by renowned professional bands. With over a dozen adrenaline charged performances, the event is a hot favourite amongst youngsters. Performances by bands like Arcane Deception and Indian Ocean have been major crowd pullers in the past.
									<div class="hector09_slide_toolbar">
										<div class="hector09_slide_date">
											Venueue: OAT
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class='mi_row hector09_slide' current='3' style='background-image: url(img/h09_bg3.png);'>
							<div class='hector09_slide_detail'>
								<h2 style='text-align: center;margin-top: 20px;color: #cb0948;font-family: pf_din_text_cond_proregular;'>		Tug of War
								</h2>
								<br>
								<div class='hector09_slide_detail_data'>
									BOB brings together rock lovers from all over the country for an electrifying experience, courtesy some of the most talented amateur rock bands in the land. The day long rock fest also witnesses scintillating performances by renowned professional bands. With over a dozen adrenaline charged performances, the event is a hot favourite amongst youngsters. Performances by bands like Arcane Deception and Indian Ocean have been major crowd pullers in the past.
									<div class="hector09_slide_toolbar">
										<div class="hector09_slide_date">
											Venueue: OAT
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class='mi_row hector09_slide' current='4' style='background-image: url(img/h09_bg3.png);'>
							<div class='hector09_slide_detail'>
								<h2 style='text-align: center;margin-top: 20px;color: #cb0948;font-family: pf_din_text_cond_proregular;'>		Minute to Win it!
								</h2>
								<br>
								<div class='hector09_slide_detail_data'>
									BOB brings together rock lovers from all over the country for an electrifying experience, courtesy some of the most talented amateur rock bands in the land. The day long rock fest also witnesses scintillating performances by renowned professional bands. With over a dozen adrenaline charged performances, the event is a hot favourite amongst youngsters. Performances by bands like Arcane Deception and Indian Ocean have been major crowd pullers in the past.
									<div class="hector09_slide_toolbar">
										<div class="hector09_slide_date">
											Venueue: OAT
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class='mi_row hector09_slide' current='5' style='background-image: url(img/h09_bg3.png);'>
							<div class='hector09_slide_detail'>
								<h2 style='text-align: center;margin-top: 20px;color: #cb0948;font-family: pf_din_text_cond_proregular;'>		Street Soccer
								</h2>
								<br>
								<div class='hector09_slide_detail_data'>
									BOB brings together rock lovers from all over the country for an electrifying experience, courtesy some of the most talented amateur rock bands in the land. The day long rock fest also witnesses scintillating performances by renowned professional bands. With over a dozen adrenaline charged performances, the event is a hot favourite amongst youngsters. Performances by bands like Arcane Deception and Indian Ocean have been major crowd pullers in the past.
									<div class="hector09_slide_toolbar">
										<div class="hector09_slide_date">
											Venueue: OAT
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class='mi_row hector09_slide' current='6' style='background-image: url(img/h09_bg3.png);'>
							<div class='hector09_slide_detail'>
								<h2 style='text-align: center;margin-top: 20px;color: #cb0948;font-family: pf_din_text_cond_proregular;'>		Mechanical Bull
								</h2>
								<br>
								<div class='hector09_slide_detail_data'>
									BOB brings together rock lovers from all over the country for an electrifying experience, courtesy some of the most talented amateur rock bands in the land. The day long rock fest also witnesses scintillating performances by renowned professional bands. With over a dozen adrenaline charged performances, the event is a hot favourite amongst youngsters. Performances by bands like Arcane Deception and Indian Ocean have been major crowd pullers in the past.
									<div class="hector09_slide_toolbar">
										<div class="hector09_slide_date">
											Venueue: OAT
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class='mi_row hector09_slide' current='7' style='background-image: url(img/h09_bg3.png);'>
							<div class='hector09_slide_detail'>
								<h2 style='text-align: center;margin-top: 20px;color: #cb0948;font-family: pf_din_text_cond_proregular;'>		Sketching
								</h2>
								<br>
								<div class='hector09_slide_detail_data'>
									BOB brings together rock lovers from all over the country for an electrifying experience, courtesy some of the most talented amateur rock bands in the land. The day long rock fest also witnesses scintillating performances by renowned professional bands. With over a dozen adrenaline charged performances, the event is a hot favourite amongst youngsters. Performances by bands like Arcane Deception and Indian Ocean have been major crowd pullers in the past.
									<div class="hector09_slide_toolbar">
										<div class="hector09_slide_date">
											Venueue: OAT
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class='mi_row hector09_slide' current='8' style='background-image: url(img/h09_bg3.png);'>
							<div class='hector09_slide_detail'>
								<h2 style='text-align: center;margin-top: 20px;color: #cb0948;font-family: pf_din_text_cond_proregular;'>		Photography
								</h2>
								<br>
								<div class='hector09_slide_detail_data'>
									BOB brings together rock lovers from all over the country for an electrifying experience, courtesy some of the most talented amateur rock bands in the land. The day long rock fest also witnesses scintillating performances by renowned professional bands. With over a dozen adrenaline charged performances, the event is a hot favourite amongst youngsters. Performances by bands like Arcane Deception and Indian Ocean have been major crowd pullers in the past.
									<div class="hector09_slide_toolbar">
										<div class="hector09_slide_date">
											Venueue: OAT
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class='mi_row hector09_slide' current='9' style='background-image: url(img/h09_bg3.png);'>
							<div class='hector09_slide_detail'>
								<h2 style='text-align: center;margin-top: 20px;color: #cb0948;font-family: pf_din_text_cond_proregular;'>		T-shirt design
								</h2>
								<br>
								<div class='hector09_slide_detail_data'>
									BOB brings together rock lovers from all over the country for an electrifying experience, courtesy some of the most talented amateur rock bands in the land. The day long rock fest also witnesses scintillating performances by renowned professional bands. With over a dozen adrenaline charged performances, the event is a hot favourite amongst youngsters. Performances by bands like Arcane Deception and Indian Ocean have been major crowd pullers in the past.
									<div class="hector09_slide_toolbar">
										<div class="hector09_slide_date">
											Venueue: OAT
										</div>
									</div>
								</div>
							</div>
						</div-->
						<a href="#" class="slidesjs-previous slidesjs-navigation" style="display:none"></a>
						<a href="#" class="slidesjs-next slidesjs-navigation" style="display:none"></a>
					</div>
				
					
				</div>
                </div>
                
                <div class="video-bar">
                  <div class="fun_facts">
                    <span></span>
                    <div class="slides">
                      <ul>
                        <li style="line-height:27px;padding-top:11px;" class="active">4 Nights Of Oblivion To Euphoria</li>
                      </ul>
                    </div>
                  </div>
                  <div class="social">
                    <ul>
                      <li class="fb">
                        <a href="http://www.engifest.dce.edu" target="_blank" rel="follow" onclick="event.preventDefault ? event.preventDefault() : event.returnValue = false;streamPublish('http://www.engifest.dce.edu/','http://www.engifest.dce.edu/img/1533968_444841532308232_2137693751_n.png','ENGIFEST\'14  ','Delhi Technological University','Welcome to The Engifest, the brainchild of creativity, hard work and energy! Engifest is the annual intercollege cultural festival celebrated in DTU. It symbolizes everything what college life is about – and much more!');">
                           <span></span>
                           <div></div>
                        </a>
                      </li>
					  <!--
                      <li class="twitter">
                                    <a href="http://www.engifest.dce.edu/" target="_blank" rel="follow" onclick="event.preventDefault ? event.preventDefault() : event.returnValue = false; window.open(&#39;https://www.twitter.com/share?text=Welcome to The Engifest'14, the brainchild of creativity, hard work and energy! Engifest is the annual intercollege cultural festival celebrated in DTU. It symbolizes everything what college life is about – and much more!&amp;url=http://www.engifest.dce.edu&#39;,&#39;Twitter&#39;,&#39;height=300,width=600&#39;);">
                                      <span></span>
                                      <div></div>
                                    </a>
                      </li>-->
                    </ul>
                  </div>
                </div>
                <div class="button openBlock">
                  <div class="bg"></div>
                  <div class="bg_over"></div>
                  <div class="text go">GO</div>
                  <div class="img"></div>
                </div>
              </div>
			    <div class="item item-4" rel="4">
                <div class="blocks-wrap">
                  <div class="block1 block openBlock skrollable skrollable-after" data-0="left:-200px" data-1650="left:-1px" style="left: -1px;">
                    <div class="bg"></div>
                    <div class="img">
                      <img src="./data/map.png" height="337" width="338">
                    </div>
                  </div>
                  <div class="block2 block skrollable skrollable-after" data-0="top:-200px" data-1650="top:0" style="top: 0px;">
                    <div class="text" style="top: 96px;">
                      <h3></h3>
                      <h2 >“Know/Reach Us”</h2>
                    </div>
                  </div>
                  <div class="block3 block openBlock skrollable skrollable-after" data-0="right:-200px" data-1650="right:0" style="right: 0px;">
                    <div class="bg"></div>
                    <div class="shadow"></div>
                    <div class="side1">
                      <div class="text" style="top: 70px;">
                        <ul>
                          <li><span>#</span>Reach Us</li>
                          
                        </ul>
                      </div>
                    </div>
                    
                  </div>
                  <div class="block4Wrap skrollable skrollable-after" data-0="right:200px;top:30px;" data-1650="right:0;top:0;" style="right: 0px; top: 0px;">
                    <div class="block4 block">
                      <div class="bg"></div>
                      <div class="box"></div>
                      <div class="shadow"></div>
                    </div>
                  </div>
                </div>
								<div class="texts">
									<div class="textBlock1">
										<p></p>
									</div>
									<div class="textBlock2" style="display: none;">
										<div class="cnt" style="top: 57.5px;">
											<h3 style="position: absolute;top: -30px;">Know</h3>
											<h2>“REACH US”</h2>
										</div>
									</div>
								</div>
                <div class="player_bg player_bg1"></div>
                <div class="player_bg player_bg2"></div>
                <div class="videoWrap" style="display: none; opacity: 0;" onclick="return false;">
          <div class="container" >
					<div class='bane94-slides'>
							<div class="mi_row">
								<div id="panel" style="position: absolute;top: 5px;left: 0;margin-left: 12%;z-index: 35;background-color: rgba(255,255,255,0.7);padding: 5px;border: 1px solid #fff;">
									<label>Enter your location:</label><input type="text" id="geolocation" style="background-color: rgba(0,0,0,0.2);width: 150px;margin-right: 30px;" /><input type="submit" id='calcpath' onclick="calcRoute();" value="Find Path" style="width:100px;margin-right:2px;"><input type="submit" id='calcpathauto' onclick="calcRouteauto();" value="Use Current">
									</div>
								<div id="map-canvas" style="width:100%;height:390px;"></div>
							</div>
							<div class="mi_row">
								
							</div>
							  <a href="#" class="slidesjs-previous slidesjs-navigation" style="display:none"></a>
							  <a href="#" class="slidesjs-next slidesjs-navigation" style="display:none"></a>
					</div>
				</div>
                </div>
                
                <div class="video-bar">
                  <div class="fun_facts">
                    <span></span>
                    <div class="slides">
                      <ul>
                        <li class="active">Memories Are All We Have... Come Create Them!</li>
                      </ul>
                    </div>
                  </div>
                <div class="social">
                    <ul>
                    <!--  <li class="fb">
                        <a href="javascript:void()" target="_blank" rel="follow" onclick="event.preventDefault ? event.preventDefault() : event.returnValue = false;streamPublish('http://www.engifest.dce.edu/','http://www.engifest.dce.edu/img/1533968_444841532308232_2137693751_n.png','ENGIFEST\'14  ','Delhi Technological University','Welcome to The Engifest, the brainchild of creativity, hard work and energy! Engifest is the annual intercollege cultural festival celebrated in DTU. It symbolizes everything what college life is about – and much more!');">
                           <span></span>
                           <div></div>
                        </a>
                      </li>                    <li class="twitter">
                                    <a href="" target="_blank" rel="follow" onclick="event.preventDefault ? event.preventDefault() : event.returnValue = false; window.open(&#39;https://twitter.com/share?text=All that Mythical Peloponnese has to offer, with the help of impressive 3D Animation, by Mindworks!&amp;url=http://www.mindworks.gr/&#39;,&#39;Twitter&#39;,&#39;height=300,width=600&#39;)">
                                      <span></span>
                                      <div></div>
                                    </a>
                      </li>-->
                    </ul>
                  </div>
                </div>
                <div class="button openBlock">
                  <div class="bg"></div>
                  <div class="bg_over"></div>
                  <div class="text go">GO</div>
                  <div class="img"></div>
                </div>
              </div>

            </div><!--items-->
              <div class="lights-out" style="height: 634px;"></div>

          </div>
        </div><!--casestudies-->

        <div id="footer">
          <div class="dirtFooter animatedBlock"></div>
          <div class="wrapper">
            <div class="cnt animatedBlock" style="top: 16.80000000000001px;">
             <h2>JUST WHEN YOU<br>THOUGHT FUN<br> WAS SCARCE <span class="copy"></span></h2>
			 <div id="blankspace"></div>


			  <!-- sponsers hidden coz we dont have emm -->

              <div style="display: block;width: 1169px;height: 450px;margin-top: 5px;float: right;position: relative;right: -70px;">
			  <div class="hector09_sponser">


					<div class="hector09_nontitle">
						<div box="1" class="h09not_1">
							<img src="sponsers/Sponsor/cr.png" id="sp01" no="1" style="z-index: 0; opacity: 1; left: -240px;width:100%;"  current="true">
							<img src="sponsers/Sponsor/ba.png" id="sp02" no="2" style="left: -480px; z-index: 0; opacity: 1;width:100%;">
							<img src="sponsers/Sponsor/dv.png" id="sp09" no="3" style="left: -720px; z-index: 0; opacity: 1;width:100%;">
							<img src="sponsers/Sponsor/fv.jpg" id="sp10" no="4" style="left: -960px; z-index: 0; opacity: 1;width:100%;">
						</div>
						<div box="2" class="h09not_2">
							<img src="sponsers/Sponsor/ifls.png" id="sp04" no="1" style="z-index: 0; opacity: 1; top: -225px;width:100%;" current="true">
							<img src="sponsers/Sponsor/ntpc.png" id="sp05" no="2" style="top: -450px; z-index: 0; opacity: 1;width:100%;">
							<img src="sponsers/Sponsor/rb.jpg" id="sp11" no="3" style="top: -675px; z-index: 0; opacity: 1;width:100%;">
							<img src="sponsers/Sponsor/rsj.jpg" id="sp12" no="4" style="top: -900px; z-index: 0; opacity: 1;width:100%;">
							
						</div>
						<div box="3" class="h09not_3">
							<img src="sponsers/Sponsor/shiplock.png" id="sp07" no="1" style="z-index: 0; opacity: 1; top: 675px;width:100%;"  current="true">
							<img src="sponsers/Sponsor/weez.png" id="sp08" no="2" style="top: 450px; z-index: 0; opacity: 1;width:100%;">
							<img src="sponsers/Sponsor/sg.jpg" id="sp13" no="3" style="top: 675px; z-index: 0; opacity: 1;width:100%;">
						</div>
						<div box="4" class="h09not_4">
							<img src="sponsers/Sponsor/ba.png" id="sp10" no="1" style="z-index: 0; opacity: 1; left: 480px;width:100%;"  current="true">
							<img src="sponsers/Sponsor/ifls.png" id="sp11" no="2" style="left: 480px; z-index: 0; opacity: 1;width:100%;">
                            <img src="sponsers/Sponsor/ntpc.png" id="sp11" no="3" style="left: 480px; z-index: 0; opacity: 1;width:100%;">
                            <img src="sponsers/Sponsor/weez.png" id="sp11" no="4" style="left: 480px; z-index: 0; opacity: 1;width:100%;">
                            <img src="sponsers/Sponsor/shiplock.png" id="sp11" no="5" style="left: 480px; z-index: 0; opacity: 1;width:100%;">
                            <img src="sponsers/Sponsor/cr.png" id="sp11" no="6" style="left: 480px; z-index: 0; opacity: 1;width:100%;">
							<img src="sponsers/Sponsor/sg.jpg" id="sp13" no="7" style="left: 480px; z-index: 0; opacity: 1;width:100%;">
							<img src="sponsers/Sponsor/rb.jpg" id="sp11" no="8" style="left: 480px; z-index: 0; opacity: 1;width:100%;">
							<img src="sponsers/Sponsor/rsj.jpg" id="sp12" no="9" style="left: 480px; z-index: 0; opacity: 1;width:100%;">
							<img src="sponsers/Sponsor/dv.png" id="sp09" no="10" style="left: 480px; z-index: 0; opacity: 1;width:100%;">
							<img src="sponsers/Sponsor/fv.jpg" id="sp10" no="11" style="left: 480px; z-index: 0; opacity: 1;width:100%;">
						</div>
					</div>
				<div class="hector09_cotitle">
						<div class="hector09_cotitle_1">


						<img src="sponsers/Co-Sponsor/asus.png" id="cosponser1" style="z-index: 1; top: 0px;" title="Co-Sponsers">

						<img src="sponsers/Co-Sponsor/campus.png" id="cosponser2" style="position: 225px;z-index: 2;width:100%;" title="Co-Sponsers">

						<img src="sponsers/Co-Sponsor/epson.png" id="cosponser3" style="position: 450px;z-index: 2;width:100%;" title="Co-Sponsers">

						</div>
						<div class="hector09_cotitle_2">
						<img src="sponsers/Co-Sponsor/forsee.png" id="cosponser1" style="z-index: 1; top: 0px;" title="Co-Sponsers">

						<img src="sponsers/Co-Sponsor/evernote.png" id="cosponser2" style="position: 225px;z-index: 2;width:100%;" title="Co-Sponsers">

						<img src="sponsers/Co-Sponsor/hero.png" id="cosponser4" style="position: 450px;z-index: 2;width:100%;" title="Co-Sponsers">
</div>
					</div><div class="hector09_title">
						<img src="img/sponsers/title1.jpg" alt="title-sponser">
					</div></div>
				</div>


			  <div class="contact">
                <h3>CONTACT US<span></span></h3>
                <div class="form">
                  <div class="close"><span></span><div class="text">Close</div></div>
                  <div class="ribbon">
                    <div class="shadow"></div>
                    <div class="wrap">
                      <div class="img"></div>
                      <p class="first"><b>Visit us</b> </p>
                      <p class="top" style="font-size: 14px;line-height: 15px;">Delhi Technological University</p>
                      <p style="font-size: 14px;line-height: 15px;">Rohini, Delhi</p>
                      <a href="mailto:engifest@dce.edu" class="mail">engifest@dce.edu</a>
                      <p class="tel"></p>
                    </div>
                  </div>
                   <div class="formWrap"><form name="ContactForm" id="ContactForm" action="" onsubmit="return false;" method="post">
				   <input type="hidden" name="formName" value="ContactForm">
                   <fieldset>
					  <div class="wrap">
						<div class="fieldWrap">
						  <div class="field field-1 text"><input type="text" class="text watermarked" id="txtName" name="txtName" placeholder="We’ll probably need your name…"></div>
						</div>
						<div class="fieldWrap">
						  <div class="field field-2 text"><input type="text" class="text watermarked" id="txtMail" name="txtMail" placeholder="and your email."></div>
						</div>
						<div class="field textarea text"><textarea id="txtaMessage" name="txtaMessage" maxlength="3000" class="watermarked" placeholder="Ok, now tell us!"></textarea></div>
						<div class="field submit"><input type="submit" id="btnSubmit" name="btnSubmit" value="Send Message" onclick="sendcontactus();return false;"></div>
					  </div>
					</fieldset></form><div class="thankYou" style="display: none;">
						<p>THANK YOU FOR CONTACTING US.<br> WE WILL GET BACK TO YOU<br> AS SOON AS POSSIBLE.</p>
					  </div>
					</div>
                </div>
              </div>
            </div><!--cnt-->
         	
            <div class="bottom">
              <div class="footer_logo"><img src="data/logo.png" width="148px"></div>
              <div class="text">
				<strong>powered by <a href='http://cistoner.org' target="_blank" title='cistoner homepage'>Cistoner</a> || <a href='http://cistoner.org/members/' title="Developers" target="_blank"> developers </a>
			  </div>
            </div>
			
          </div>
        </div>
      </div><!--main-->
    </div>
  </div><!--mainWrapper-->
  
<!--- bane94-innerpage div--->

<!-- hector09: history.js implamentation -->
<script>
var forwardflag=0;
var validStates = new Array();

		var url = "http://www.engifest.dce.edu";
			(function(window,undefined){
				var
					State = History.getState(),
					$log = $('#log');

				// Log Initial State
				History.log('initial:', State.data, State.title, State.url);
				
				// Bind to State Change
				History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
					// Log the State
					var State = History.getState(); 
					History.log('statechange:', State.data, State.title, State.url);
					if(State.url == url)
					{
						forwardflag=0;
						$('#bane94-innerpage').animate({left:'-2500px'},"slow",function(){
						document.getElementById('topVideo').play();
						$('body').css('overflow','auto');});	
					}
					else
					{	
						for(i = 0;i < validStates.length;i++)
						{
							if(State.title == validStates[i] && forwardflag==0){$("#bane94-innerpage .bane94-fullspan .bane94-title").html(" " +validStates[i] +" ");$('#bane94-innerpage').animate({left:'0'},"slow",function(){
							document.getElementById('topVideo').pause();
							$('body').css('overflow','hidden');});	break;}
							else if(State.title == validStates[i] && forwardflag==1){forwardflag=0;break;}
							
						}
						
					}
				});
			})(window);
		</script>
<!-- history.js implementation -->	


	<div id="bane94-innerpage">
		<div id='bane94-backbutton' onclick="javascript: innerpageclose();">
		</div>
		<!-- title here : this constitutes the top section at center -->
		<div class="bane94-fullspan">
			<div class="bane94-title">
				Paridhan
			</div>
		</div>
		<div class="bane94_workspace">
			<div class="bane94-halfspan left" >
				<div class="bane94-image"></div>
				<div class="bane94-toolbar">
					<div class="base94-buttons"><input type="submit" value="Register now!" onclick="registershow();return false;" /></div>
				</div>
			</div>
			<div class="bane94-halfspan right" >
				<div class="bane94-timeline">
				</div>
				<div class="bane94-description">
				</div>
			</div>
			<div class="bane94-gallery bane94-fullspan" style="width:98%;">
			</div>
		</div>
		
		<div class="bane94-fullspan bottom">
		</div>
	</div>
  <!--- bane94-innerpage div ends here--->
  
  
  
  
  
    </div><!--main website container end-->
	
	<script type="text/javascript" src="./data/Common.js"></script>
	<!--bane94 loading script-->
	
			<script>
				loadedsofar=0;
				percent=0;
				
							if (document.images) {
							img1 = new Image();
							img2 = new Image();
							img3 = new Image();
							img4 = new Image();

							img1.src = "data/main_bg1.png";
							img1.onload = function(){
								loadedsofar++;
								loaded(0);
							}
							img2.src = "data/main_bg2.jpg";
							img2.onload = function(){
								loadedsofar++;
								loaded(1);
							}
							
							img3.src = "data/triangle1.png";
							img3.onload = function(){
								loadedsofar++;
								loaded(2);
							}
							
							img4.src="data/triangle2.png";
							img4.onload = function(){
								loadedsofar++;
								loaded(3);
							}
							
							
						}
						function loaded(item){
							
							$('.loader #bane94_loadtrail').animate({width:'+=78'},{duration:2000,step:function(now){if(now<383){percent=parseInt((now/383)*100);$('#bane94_percent').text(percent+"%")}},complete:function(){
							loadedsofar++;
							if(loadedsofar==8)
							{	
							
								$('div#loader').animate({top:'-800px'},1000,function(){$('div.loader').remove();});
								enable_scroll();
								var vid = document.getElementById('topVideo');
								var vidm = document.getElementById('bgMusic');
								vid.play();
								vidm.play();
								start_delay_load();
							}}});
							
						}
//spotflux and ultrasurf add removal
if($('#sfzerk').length>0)$('#sfzerk').parent().remove();
			</script>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
<!--  ============================================================== -->
<!-- accessiblity menu by minhaz start here -->

<script src='js/hector09.js'></script>
<style type="text/css">
	body{background: black}
	#hector09_menu {
		color: white;
		font-family: Consolas;
		width: 140px;
		position: fixed;
		left: 20px;
		z-index: 999;
		z-index: 999;
		opacity: .2;
		-webkit-transition: opacity .2s;
		-moz-transition: opacity .2s;
		-o-transition: opacity .2s;
		transition: opacity .2s;
		bottom: -270px;
	}
	#hector09_menu:hover{opacity: 1;}
	.hector09_menutab{
		display: block;
		width: 100%;
		margin-top: 1px;
		border-left: 4px silver solid;
		padding: 2px 10px 2px 10px;
		cursor: pointer;
		-webkit-transition: color .7s,border-left .7s;
		-o-transition: color .7s,border-left .7s;
		-moz-transition: color .7s,border-left .7s;
		transition: color .7s,border-left .7s;
		position: relative;
	}
	.hector09_menutab span{display: none;position: absolute;top: 10px;}
	.hector09_menutab:hover>span{display: inline}
	.hector09_menutab:hover
	{
		border-left: 4px solid #f70b59;
		color: #f70b59;
	}
	.hector09_icons{width: 32px;margin: 0px;display: inline;
		-webkit-transition: opacity .7s;
		-moz-transition: opacity .7s;
		-o-transition: opacity .7s;
		transition: opacity .7s;
		margin-right: 7px;
	}
	.hector09_clearfix{height: 10px;width: 10px;display: block}
	.hector09_ads
	{
		width: 100%;
		height: 300px;
	}
	.hector09_noborder,.hector09_noborder:hover{border: none}
	.hector09_audio_controls_ON{opacity: .2}
</style>

	<div id='hector09_menu'>
		<div class='hector09_menutab' slide='0'> 
			<img class='hector09_icons' src='img/hector09_swatches/hector09_up.png'>
			<span> Top</span>
		</div>
		<div class='hector09_menutab' slide='1'> <img class='hector09_icons' src='img/hector09_swatches/hector09_about.png'> 
			<span>Glimpses</span>
		</div>
		<div class='hector09_menutab' slide='2'> <img class='hector09_icons' src='img/hector09_swatches/hector09_events.png'> 
			<span>Events</span>
		</div>
		<div class='hector09_menutab' slide='3'> <img class='hector09_icons' src='img/hector09_swatches/hector09_informal.png'> 
			<span>Informals</span>
		</div>
		<div class='hector09_menutab' slide='5'> <img class='hector09_icons' src='img/hector09_swatches/hector09_register.png'>
			<span>Register</span>
		</div>
		<!--
		<div class='hector09_menutab' slide='6'> <img class='hector09_icons' src='img/hector09_swatches/hector09_informal.png'>
			<span>Web Team<span>
		</div>
		-->
		<div class='hector09_menutab hector09_noborder' title='Play the music' slide='-1'>
			<img class='hector09_icons hector09_audio_controls_OFF' src='img/hector09_swatches/hector09_mute.png' style='width: 32px;' title='mute'> 
			<img class='hector09_icons hector09_audio_controls_ON' src='img/hector09_swatches/hector09_play.png' style='width: 32px;' title='play song'>
		</div>
		<div class='hector09_clearfix'> </div>
		<div class='hector09_ads'></div>
	</div>	
		
<!-- accessiblity menu by minhaz ends here -->
 <script src="js/jquery.slides.min.js"></script>
 <script type="text/javascript" src="js/spinners.min.js"></script>
<script type="text/javascript" src="js/lightview.js"></script>
<script type="text/javascript" src="js/jquery.mousewheel.js"></script>
<script type="text/javascript" src="js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" src="js/flowslider.jquery.js"></script>
<script src="js/hector09_sponser.js"></script>
<!-- maps api-->
 <script src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyDTn9ga4Qzi2LRI6LWrkAPaMCW-zoGka3U&sensor=false"></script>
  <script>
			var directionsDisplay;
			var directionsService = new google.maps.DirectionsService();
			var map;

			function initialize() {
			  directionsDisplay = new google.maps.DirectionsRenderer();
			  var dtu = new google.maps.LatLng(28.7486035, 77.11991969999997);
			  var mapOptions = {
				zoom:14,
				center: dtu
			  }
			 
			  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			   var marker = new google.maps.Marker({
				  position: dtu,
				  map: map,
				  title: 'Delhi Technological University'
			  });
			  directionsDisplay.setMap(map);
			}

			function calcRoute() {
			  var start = document.getElementById('geolocation').value;
			  var end = "Delhi Technological University";
			  var request = {
				  origin:start,
				  destination:end,
				  travelMode: google.maps.TravelMode.DRIVING
			  };
			  directionsService.route(request, function(response, status) {
				if (status == google.maps.DirectionsStatus.OK) {
				  directionsDisplay.setDirections(response);
				}
			  });
			}

			function getcoords(position) {
				console.log("lat-long"+position.coords.latitude+" "+position.coords.longitude);
			  var latitude = position.coords.latitude;
			  var longitude = position.coords.longitude;
			  var start = new google.maps.LatLng(latitude, longitude);;
			  var end = "Delhi Technological University";
			  var request = {
				  origin:start,
				  destination:end,
				  travelMode: google.maps.TravelMode.DRIVING
			  };
			  directionsService.route(request, function(response, status) {
				if (status == google.maps.DirectionsStatus.OK) {
				  directionsDisplay.setDirections(response);
				}
			  });
			}

			function calcRouteauto() {
				navigator.geolocation.getCurrentPosition(getcoords);
			}
			

			//google.maps.event.addDomListener(window, 'load', initialize);

    </script>
		<!---facebook sharer --->
		<script>
			function streamPublish(link,picture,name,caption,description)
			{
				FB.ui({
					method: 'feed',
					link: link,
					display:'popup',
					picture: picture,
					name: name,
					caption: caption,
					description: description
				}, function(response){});
			} 
		</script>
  <!-- End SlidesJS Required -->
	<script>
		var item1= new Array('dance_left.png','dance_top.png','dance_right.png','fash_left.png','fashp_top.png','fash_right.png','kavisamelan_left.png','kavisamelan_top.png','kavisamelan_right.png','left1.png','top1.png','right1.png');
		var item2= new Array('groupdance_left.png','groupdance_top.png','groupdance_right.png','nukkad_natak_left.png','nukkad_natak_top.png','nukkad_natak_right.png','rock_left.png','rock_top.png','rock_right.png');
		var item3= new Array('gokarting_left.png','go_karting_top.png','go_karting_right.png','left_gamer.png','top_gamer.png','right_gamer.png','left_min_winit.png','top_min_winit.png','right_min_winit.png');
		
		var item1img = new Array();
		var item2img = new Array();
		var item3img = new Array();
		
		var count=0;
		function start_delay_load()
		{
			for(var x in item1)
			{
				item1img[x] = new Image();
				item1img[x].src="data/diamond_compressed/"+item1[x];
				item1img[x].onload=function(){
					count++;
					loaded_image();
					console.log(count);
				};
			}
			for(var x in item2)
			{
				item2img[x] = new Image();
				item2img[x].src="data/diamond_compressed/"+item2[x];
				item2img[x].onload=function(x){
					count++;
					loaded_image();
					console.log(count);
				};
			}
			for(var x in item3)
			{
				item3img[x] = new Image();
				item3img[x].src="data/diamond_compressed/"+item3[x];
				item3img[x].onload=function(x){
					count++;
					loaded_image();
					console.log(count);
				};
			}
		}
		
		function loaded_image()
		{	
			total = item1.length+item3.length+item3.length;
			
			if(count==total)
			{
				setTimeout(animatediamond,2000);
			}
		}
		function animatediamond()
		{
			iitem1 = $('.item-1');
			iitem2 = $('.item-2');
			iitem3 = $('.item-3');
			
			if($(".item").hasClass("open")){
				$(".item.open").find('.block2').css("background","url('data/block2.png') no-repeat scroll 0 0");
				setTimeout(animatediamond,4000);
				return;
			}
			
			imagecount = parseInt(iitem1.attr("image-count"));
			iitem1.find('.block1 .img').css("background","url('"+(item1img[imagecount++].src)+"') no-repeat scroll 0 0");
			iitem1.find('.block2').css("background","url('"+(item1img[imagecount++].src)+"') no-repeat scroll 0 0");
			iitem1.find('.block3 .bg').css("background","url('"+(item1img[imagecount++].src)+"') no-repeat scroll 0 -2px");
			if(imagecount==item1.length)iitem1.attr("image-count","0");
			else iitem1.attr("image-count",imagecount);
			
			imagecount = parseInt(iitem2.attr("image-count"));
			iitem2.find('.block1 .img').css("background","url('"+(item2img[imagecount++].src)+"') no-repeat scroll 0 0");
			iitem2.find('.block2').css("background","url('"+(item2img[imagecount++].src)+"') no-repeat scroll 0 0");
			iitem2.find('.block3 .bg').css("background","url('"+(item2img[imagecount++].src)+"') no-repeat scroll 0 -2px");
			if(imagecount==item2.length)iitem2.attr("image-count","0");
			else iitem2.attr("image-count",imagecount);
			
			imagecount = parseInt(iitem3.attr("image-count"));
			iitem3.find('.block1 .img').css("background","url('"+(item3img[imagecount++].src)+"') no-repeat scroll 0 0");
			iitem3.find('.block2').css("background","url('"+(item3img[imagecount++].src)+"') no-repeat scroll 0 0");
			iitem3.find('.block3 .bg').css("background","url('"+(item3img[imagecount++].src)+"') no-repeat scroll 0 -2px");
			if(imagecount==item3.length)iitem3.attr("image-count","0");
			else iitem3.attr("image-count",imagecount);
			
			setTimeout(animatediamond,4000);
		}
		
	</script>
	<script>
		function registershow()
		{
			$("#register-form").fadeIn();
		}
		$(".register-close").click(function(e){$("#register-form").fadeOut();});
		$("#register-form").click(function(e){if (e.target === this){$('#register-form').fadeOut();}});



		$("#register-grouppsubmit").click(function(){

			id = $("#register-id").val();
			if(id.length==0){$("#register-groupnotification").html("Who will enter ID? :/");return;}
			email = $("#register-email").val();
			regex = /^[a-zA-Z0-9-_.]*@[a-z]{1,7}.[a-z]{3}$/i;
			if(!regex.test(email)){$("#register-groupnotification").html("Invalid email Entered");return;}
			name = $("#register-groupname").val();
			event = $("#register-eventSub option:selected").val();
			if(event=="none"){$("#register-groupnotification").html("Select some event please :/");return;}
			$("#register-groupnotification").html("Registering...");

			$.ajax({
				url:'data/contentajax.php',
				type:'post',
				data:{id:id,gname:name,email:email,gevent:event},
				success:function(data){
					$("#register-groupnotification").html(data);
				}
			});
			setTimeout(function(){$(".form-sub input").each(function(){if($(this).attr("type")!="submit")$(this).val("");});},4000);
			return false;
		});

		$("#register-id").keypress(function(e){
			var content="";
			if(e.which==59)
			{
				iid = $(this).val();
				id = iid.split(";");
				console.log(id);
				$("#id-show").html("");
				for(var x in id)
				{
					if(id[x]!="")
					{
						$.ajax({
							url:'data/contentajax.php',
							type:'post',
							data:{uid:id[x]},
							success:function(data){
								$("#id-show").append(data);
							}
						});
					}
				}
			}
		});
		$("#register-id").blur(function(){
			iid = $(this).val();
			id = iid.split(";");
			iid = iid.substr(iid.length - 1);
			if(iid!=";")
			{
				$("#id-show").html("");
				for(var x in id)
				{
					if(id[x]!="")
					{
						$.ajax({
							url:'data/contentajax.php',
							type:'post',
							data:{uid:id[x]},
							success:function(data){
								$("#id-show").append(data);
							}
						});
					}
				}
			}
		});

		$(document).on("click",".uid-close",function(){
			uid = $(this).parent().attr("uid");
			text = $("#register-id").val();
			text = text.replace(uid+";","");
			text = text.replace(uid,"");
			$("#register-id").val(text);
			$(this).parent().remove();
		});


		function sendcontactus()
		{
			var name = $("#txtName").val();
			var regex = /^[a-zA-Z ]+$/i;
			if(!regex.test(name)){$("#txtName").val("");$("#txtName").attr("placeholder","Invalid name entered");return;}
			var email = $("#txtMail").val();
			regex = /^[a-zA-Z0-9-_.]*@[a-z]{1,7}.[a-z]{3}$/i;
			if(!regex.test(email)){$("#txtMail").val("");$("#txtMail").attr("placeholder","Invalid email entered");return;}
			var message = $("#txtaMessage").val();
			var regex = /^[a-zA-Z ]+$/i;
			if(!regex.test(message)){$("#txtaMessage").val("");$("#txtaMessage").attr("placeholder","Invalid ENTERIES entered");return;}

			$.ajax({
				url:'data/contentajax.php',
				type:'post',
				data:{contactname:name,contactemail:email,contactmessage:message},
				success:function(data){
					$(".thankYou").show().css("opacity","1");
				}
			});

		}

	</script>
<!-- for case studies animation-->
<script>
	var str = document.getElementById('mainEventslist').value;
	var arr_main = str.split('~');
	var selectObj = document.getElementById('register-eventMain');
	selectObj.innerHTML += "<option value='none'>none</option>";
	document.getElementById('register-eventSub').innerHTML += "<option value='none'>none</option>";

	for(i=0;i<arr_main.length;i++)
	{
		selectObj.innerHTML += "<option value='" +arr_main[i] +"'>" +arr_main[i] +"</option>";
	}
	str = document.getElementById('subEventslist').value;
	var arr_sub = str.split('~');
	$(document).ready(function(){
		$("#register-eventMain").change(function(){
			loaddata();
		});
		for(i=0;i<arr_sub.length;i++)console.log(arr_sub[i]);
	});

	function loaddata()
	{
		document.getElementById('register-eventSub').innerHTML = "";
		var selected = document.getElementById('register-eventMain').value;
		var count = 0;
		for(i=0;i<arr_sub.length;i++)
		{
			if(arr_sub[i].indexOf(selected)!= -1)
			{
				document.getElementById('register-eventSub').innerHTML += "<option value='"+arr_sub[i]+"'>"+arr_sub[i]+"</option>";
				count++;
			}
		}
		if(count == 0)
		{
			document.getElementById('register-eventSub').innerHTML += "<option value='"+selected+"'>"+selected+"</option>";
		}
		console.log("load-> " +selected)
	}
  </script>
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47406336-1', 'dce.edu');
  ga('send', 'pageview');

</script>
</body>
</html>