<?php
include 'data/db.php';

$baseurl = "http://www.engifest.dce.edu/";

	if(isset($_GET['key']) && !empty($_GET['key']))
	{
		$con = mysql_connect($server,$username,$password);
		if(!$con)
		{
			echo "Sorry Having truoble connect to server try again later :(";
		}
		else
		{
			mysql_select_db($db_name,$con);
			$key = $_GET['key'];
			$query = mysql_query("SELECT `tab`,`main_image`, `caption` , `description` , `date` , `images` FROM $db_table WHERE `keyword`='$key' ");
			if(mysql_num_rows($query)==1)
			{
				$row = mysql_fetch_array($query);
				$title = $key;
				$main_image = $row['main_image'];
				$caption=$row['caption'];
				$date = $row['date'];
				$tab = $row['tab'];
				$description=$row['description'];
				$images = $row['images'];
				if(strlen($images)>0)
				{
					$gallery = explode("-_-",$images);
				}
				
			}
			else
			{
				header("location:404page.html");
			}
		}
		
	}
?>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="Content-Language" content="en">
	<meta name="description" content="Engifest is the annual cultural festival of Delhi Technological University (Formerly Delhi College of Engineering). Engifest is a four-day long cultural extravaganza held in the month of February.It bridges the gap between technical education and creativity. It is a much needed wave of cultural activities, rich in diversity.It is a symbol of achivement and pride and a true testimony to the indomitable spirit, liveliness and sheer energy of youth. It witnesses wide participation from various parts of the country." />
	<meta name="keywords" content="engifest, engifest 2014 , engifest 14 , engifest dtu , engifest dce , dtu fest , dce fest , spandan engifest, battle of bands engifest , soundtrack engifest , natya engifest , nukkad engifest , anushthaan engifest" />
	<link rel='shortcut icon' href='<?php echo $baseurl; ?>img/Favicon_Engifest.ico' type='image/icon' />
	<title><?php if(isset($title)) echo "Engifest'14 -".$title; ?></title>
	<link rel="stylesheet" href="<?php echo $baseurl; ?>css/innerpage.css"/>
	<link rel="stylesheet" href="<?php echo $baseurl; ?>data/fonts.css"/>
	<link rel="stylesheet" type="text/css" href="<?php echo $baseurl; ?>css/lightview.css" />
	<link rel="stylesheet" type="text/css" href="<?php echo $baseurl; ?>data/281FC8A0950474772769C3C2155727A43.css" />
	<link rel="stylesheet" type="text/css" href="<?php echo $baseurl; ?>css/jquery.mCustomScrollbar.css" />
	<script src="<?php echo $baseurl; ?>js/jquery.js"></script>
	<script src="<?php echo $baseurl; ?>js/hector09.js"></script>
	<style>
	#register-form {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.8);
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
		width: 50%;
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
		width:150px;
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
  </head>
<body style="font-weight:bold">
	<div id="bane94-innerpage" style="left:0;display:block;">
		<div id='bane94-backbutton' onclick="location.href='<?php echo $baseurl; ?>';">
		</div>
		<!-- title here : this constitutes the top section at center -->
		<div class="bane94-fullspan">
			<div class="bane94-title">
				<?php if(isset($title)) echo $title; ?>
			</div>
		</div>
		<div class="bane94_workspace">
			<div class="bane94-halfspan left" >
				<div class="bane94-image"><img src="<?php if(isset($main_image)) echo $main_image; ?>" title="<?php if(isset($caption)) echo $caption; ?>" style="width:100%"/></div>
				<div class="bane94-toolbar">
					<div class="base94-buttons"><input type="submit" value="Register now" onclick="registershow();return false;" /></div>
				</div>
			</div>
			<div class="bane94-halfspan right" >
				<div class="bane94-timeline">
					<?php if(isset($date)) echo $date; ?>
				</div>
				<div class="bane94-description">
					<?php if(isset($description)) echo $description; ?>
				</div>
			</div>
			<div class=" bane94-gallery bane94-fullspan slider-horizontal" style="margin: 0px;margin-top: 10px;overflow-x: hidden;overflow-y: hidden;height: 120px; width: 99%;border-radius: 0px;">
				<?php 
					if(isset($gallery))
					{
						foreach($gallery as $img)
						{
							?>
							<a href="<?php echo $baseurl.$img?>" 
									 class="lightview"
									 data-lightview-group="<?php echo $title?>"
									 data-lightview-title="<?php echo $title?>" 
									 data-lightview-caption="<?php echo $caption?>" >
									<img src="<?php echo $baseurl.$img?>" alt="" />
								  </a>
							<?php
						}
					}
				?>
			</div>
		</div>
		
		<div class="bane94-fullspan bottom">
		</div>
		<<div id="register-form">
<div class="regpanel" id="regpanel">
<div class="regclosebutton" onclick="document.getElementById('register-form').click();"></div>
  <div style="color: white;font-size: 56pt;font-family: Calibri;text-align: center;margin-top: 36px;">Steps</div>
  <div class="getengiid" style="margin-bottom: 10px;">Get your EngiFest ID&nbsp;&amp; Entry Pass</div>
  <div style="text-align: center;color: white;font-style: italic;font-size:  14pt;margin-bottom: 235px;" window.open('http://www.foreseegame.com/PromotionalActivities.aspx?paramPro=DelhiTechUniversity','Get EngiID','height=400,width=600')">You will need EngiFest ID for entry</div>
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
				<div class="form-sub-label" style="width:200px;">
					<label for="register-event">
						Select Event:<span style="color:red">*</span>
					</label>
				</div>
				<select id="register-eventMain" style="width:200px;"></select>
			</div>
			<div class="form-sub">
				<div class="form-sub-label" style="width:200px;">
					<label for="register-category">
						Select category:<span style="color:red">*</span>
					</label>
				</div>
				<select id="register-eventSub" style="width:200px;"></select>
			</div>		
			<div class="form-sub">
				<div class="form-sub-label" style="width:200px;"><label for="register-name">Enter your Engifest Id(s) :<span style="color:red">*</span></label></div><input type="text" id="register-id" placeholder="Ids separated by semicolon(;)">
				<a href="javascript:window.open('http://www.foreseegame.com/PromotionalActivities.aspx?paramPro=DelhiTechUniversity','Get EngiID','height=400,width=600')" title="Get your ID" style="color:blue;cursor:pointer;"><u>Get your ID</u></a>
				<br>
				<div id="id-show"></div>
			</div>
			<div class="form-sub">
				<div class="form-sub-label" style="width:200px;">
					<label for="register-email">
					Enter your email id:<span style="color:red">*</span>
				</label>
				</div><input type="email" id="register-email" placeholder="your email id"><br>
			</div>
			<div class="form-sub">
				<div class="form-sub-label" style="width:200px;">
					<label for="register-groupname">Enter your Group Name:<br><cite>[ Only for group events ]</cite></label>
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
  	</div>

	<script type="text/javascript" src="<?php echo $baseurl; ?>js/lightview.js"></script>
	<script type="text/javascript" src="<?php echo $baseurl; ?>js/jquery.mousewheel.js"></script>
	<script type="text/javascript" src="<?php echo $baseurl; ?>js/jquery.mCustomScrollbar.concat.min.js"></script>
	<script type="text/javascript" src="<?php echo $baseurl; ?>js/flowslider.jquery.js"></script>
	<script>
		$("#bane94-innerpage .right .bane94-description").mCustomScrollbar({
			autoHideScrollbar:true,
			theme:"light-thin"
		});
		$(".bane94-gallery").FlowSlider();
		$(".www_FlowSlider_com-branding").remove();
		
		function registershow()
		{
			$("#register-form").fadeIn();
		}
		$(".register-close").click(function(e){$("#register-form").fadeOut();});
		$("#register-form").click(function(e){if (e.target === this){$('#register-form').fadeOut();}});
		
		$("#register-groupshow").click(function(){
			$("#eventreg").fadeOut(function(){$("#groupreg").fadeIn();});
		});
		
		$("#register-eventshow").click(function(){
			$("#groupreg").fadeOut(function(){$("#eventreg").fadeIn();});
		});
		
		
		$("#register-grouppsubmit").click(function(){
			var name = $("#txtName").val();
			var regex = /^[a-zA-Z ]+$/i;
			if(!regex.test(name)){$("#txtName").val("");$("#txtName").attr("placeholder","Invalid name entered");return;}
			var email = $("#txtMail").val();
			regex = /^[a-zA-Z0-9-_.]*@[a-z]{1,7}.[a-z]{3}$/i;
			if(!regex.test(email)){$("#txtMail").val("");$("#txtMail").attr("placeholder","Invalid email entered");return;}
			var message = $("#txtaMessage").val();
			var regex = /^[a-zA-Z ]+$/i;
			if(!regex.test(message)){$("#txtaMessage").val("");$("#txtaMessage").attr("placeholder","Invalid ENTERIES entered");return;}
			
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
							url:'<?php echo $baseurl; ?>data/contentajax.php',
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
							url:'<?php echo $baseurl; ?>data/contentajax.php',
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
	</script>
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






