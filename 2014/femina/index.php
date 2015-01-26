<!DOCTYPE html>
<html lang="en">
<head>
<title>Engifest'14 Femina Miss India Auditions</title>
<meta charset="utf-8">
<link rel="stylesheet" href="css/style.css" type="text/css" media="all">
<link href="css/perfect-scrollbar.css" rel="stylesheet">
<link href='http://fonts.googleapis.com/css?family=Averia+Sans+Libre' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Montserrat+Alternates:700' rel='stylesheet' type='text/css'>

<link href='http://fonts.googleapis.com/css?family=Carme' rel='stylesheet' type='text/css'>
<style type="text/css">
.contactinfotab
{
	display: inline-block;
	width: 200px;
	background: rgba(255,255,255,.6);
	padding: 20px;
	margin: 10px;
	color:black;
	margin-bottom: 30px;
}
.required{color: #f70b59;font-weight:bold;display: none}
.info{color: #f70b59;display: none}
.redborder{
	box-shadow: inset 0px 0px 10px red;
	-webkit-box-shadow: inset 0px 0px 10px red;
	-moz-box-shadow: inset 0px 0px 10px red;
	-o-box-shadow: inset 0px 0px 10px red;
	border: 1px solid red;
}
.pure-control-group {
	margin: 10px 0px 0px 0px;
	padding: 0px;
}
.form_label{display: inline-block;width:150px;}
.form_input{display: inline-block;}
.galleryspace div{
	display: inline-block;
	width:200px;height:200px;
	margin:10px;
	border:1px solid grey;
	background: rgba(255,255,255,.5);
	cursor:pointer;
	padding: 0px;
	overflow: hidden;
	}
.galleryspace {
	padding: 10px 10px 10px 40px;
}
.menu ul li:hover>div{
	background: #f70b59;
	padding: 13px 30px 13px 60px;
}
#notification{cursor:pointer;position:fixed;top:10px;right:10px;width:400px;padding:10px;background:rgba(255,255,255,.5);color:black;font-size:20pt;display: none;}
</style>
<body>
<div id="notification" title="click to hide">
<?php
if(isset($_GET['code']))
{
	if($_GET['code'] == 0)
	{
		if(isset($_GET['error']))
		{
			echo "ERROR: " .$_GET['error'];
		}
	}
	else if($_GET['code']==1)
	{
		echo "SUCCESS: Registration successfull! You will be contacted shortly!";
	}

}
?>
</div>
	<section>
		<div class="left">
			<div class="logo"><img src="img/logo.png"><br>Femina Miss India
			<span style="font-size:20pt">Auditions,15th Feb 2014</span>
			<span style="font-size:14pt">Delhi Technological University (DCE)</span>
			</div>
			<div class="menu">
				<ul>
					<li goto="home"><div>Home</div></li>
					<li goto="rules"><div>Rules & Regulations</div></li>
					<li goto="gallery"><div>Gallery</div></li>
					<li goto="register"><div>Register Now</div></li>
					<li goto="contact"><div>Contact Us</div></li>
					<li goto="engifest"><div>Engifest Home</div></li>
				</ul>
			</div>
		</div>
		<div class="right">
			
			<div on="home" id="home">
				<div class="clearfix" style="height:100px"></div>
				<video src="video.mp4" controls autoplay width="700px" id="myvideo">
			</div>
			
			<div on="rules" id="rules" style="text-align:left">
				<div class="clearfix" style="height:10px"></div>
				<div class="rules space">
					<h3>Rules & Regulations</h3>
					<div class="fo">
					1. Nationality:Indian Passport Holder<br>
					2. Age: 18-25<br>
					3. Relationship Status: Unmarried<br>
					4. Dress Code: Black cocktail dress and stilettos<br>
					5. Height: 5'6 and above(Without heels)<br>
					<br>
					<strong>Note:</strong>The winners of the FBB FMI audition at DCE will get a Direct Entry to the final round of the regional Miss India auditions of their respective cities or  will be fast tracked to the final round of Mumbai Auditions.
					</div>
					<div class="clearfix" style="height:100px"></div>
				</div>
				<div class="clearfix" style="height:100px"></div>
				<div class="clearfix" style="height:100px"></div>
			</div>
			<div on="gallery" id="gallery" style="text-align:left">
				<div class="clearfix" style="height:10px"></div>
				<div class="space">
					<h3 style="margin-bottom: 1px">Gallery</h3>
					<div class="galleryspace" style="padding-top:0px">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						
					</div>
				</div>
				
				<div class="clearfix" style="height:100px"></div>
				<div class="clearfix" style="height:100px"></div>
				<div class="clearfix" style="height:100px"></div>
				<div class="clearfix" style="height:100px"></div>
				<div class="clearfix" style="height:100px"></div>
			</div>
			<div on="register" id="register"  style="text-align:left;">
				<div class="clearfix" style="height:5px"></div>
				<div class="form space" id="registerform" style="height:600px;overflow:hidden"> 
					<h3>Register Now</h3>
					<div>
						<form style="border:none" action="javascript:void(0)" id="myform" method="post" enctype="multipart/form-data">
							<fieldset  style="border:none;">
								<div class="pure-control-group">
									<div class="form_label">
										<label for="name">Name<span class="required">*</span></label>
									</div>
									<div class="form_input">
										<input id="fname" type="text" name="fname" placeholder="First Name" required>
										<input id="lname" type="text" name="lname" placeholder="Last Name" required>
										&nbsp;&nbsp;<span class="info" id="name_info">Alphabets only</span>
									</div>
								</div>

								<div class="pure-control-group">
									<div class="form_label">
										<label for="password">Date of Birth<span class="required">*</span></label>
									</div>
									<div class="form_input">
										<select id="dob_date"  name="dob_date" style="width:50px">
											<?php for($i = 1; $i <= 31; $i++)
													{
														echo "<option value='$i'> $i </option>";
													}
											
											?>
										</select>
										<select id="dob_month"  name="dob_month" style="width:50px">
											<?php for($i = 1; $i <= 12; $i++)
													{
														echo "<option value='$i'> $i </option>";
													}
											
											?>
											
										</select>
										<select id="dob_year"  name="dob_year" style="width:100px">
											<?php for($i = 1988; $i <= 1996; $i++)
													{
														echo "<option value='$i'> $i </option>";
													}
											
											?>
										
										</select>
									</div>
								</div>

								<div class="pure-control-group">
									<div class="form_label">
										<label for="email">Email Address<span class="required">*</span></label>
									</div>
									<div class="form_input">
										<input id="email" name="email" type="email" placeholder="Email Address"  style="width:400px" required>
										&nbsp;&nbsp;<span class="info" id="email_info">Fill in correct format</span>
									</div>
								</div>
								<div class="pure-control-group">
									<div class="form_label">
										<label for="college Name">College Name<span class="required">*</span></label>
									</div>
									<div class="form_input">
										<input id="clgname" name="clgname"  type="text" placeholder="College Name Here..."  style="width:400px" required>
									</div>
								</div>
								<div class="pure-control-group">
									<div class="form_label">
										<label for="Phone No">Phone No<span class="required">*</span></label>
									</div>
									<div class="form_input">
										<input id="phone_prefix" readonly type="text" placeholder="+91" value="+91" style="width:40px">
										<input id="phone"  name="phone" type="text" placeholder="Number Here.." required>
										&nbsp;&nbsp;<span class="info" id="phone_info">10 digit Mobile No</span>
									</div>
								</div>
								<div class="pure-control-group">
									<div class="form_label">
										<label for="Phone No">Street Addres 1<span class="required">*</span></label>
									</div>
									<div class="form_input">
										<input id="address1"  name="address1" type="text" placeholder="street address 1"  style="width:400px" required>
									</div>
								</div>
								<div class="pure-control-group">
									<div class="form_label">
										<label for="Phone No">Street Addres 2</label>
									</div>
									<div class="form_input">
										<input id="address2" name="address2" type="text" placeholder="street address 2" style="width:400px">
									</div>
								</div>
								<div class="pure-control-group">
									<div class="form_label">
										<label for="">City / State<span class="required">*</span></label>
									</div>
									<div class="form_input">
										<input id="city" name="city" type="text" placeholder="City" required>
										<input id="state" name="state" type="text" placeholder="State" required>
										&nbsp;&nbsp;<span class="info" id="location_info">Alphabets Only</span>
									</div>
								</div>
								<div class="pure-control-group">
									<div class="form_label">
										<label for="Zip">Zip<span class="required">*</span></label>
									</div>
									<div class="form_input">
										<input id="zip" name="zip" type="text" placeholder="Zip / Postal" required>
										<select  name="country" name="country" id="country" required>
										<option value="United States"> United States </option>
										<option value="Afghanistan"> Afghanistan </option>
										<option value="Albania"> Albania </option>
										<option value="Algeria"> Algeria </option>
										<option value="American Samoa"> American Samoa </option>
										<option value="Andorra"> Andorra </option>
										<option value="Angola"> Angola </option>
										<option value="Anguilla"> Anguilla </option>
										<option value="Antigua and Barbuda"> Antigua and Barbuda </option>
										<option value="Argentina"> Argentina </option>
										<option value="Armenia"> Armenia </option>
										<option value="Aruba"> Aruba </option>
										<option value="Australia"> Australia </option>
										<option value="Austria"> Austria </option>
										<option value="Azerbaijan"> Azerbaijan </option>
										<option value="The Bahamas"> The Bahamas </option>
										<option value="Bahrain"> Bahrain </option>
										<option value="Bangladesh"> Bangladesh </option>
										<option value="Barbados"> Barbados </option>
										<option value="Belarus"> Belarus </option>
										<option value="Belgium"> Belgium </option>
										<option value="Belize"> Belize </option>
										<option value="Benin"> Benin </option>
										<option value="Bermuda"> Bermuda </option>
										<option value="Bhutan"> Bhutan </option>
										<option value="Bolivia"> Bolivia </option>
										<option value="Bosnia and Herzegovina"> Bosnia and Herzegovina </option>
										<option value="Botswana"> Botswana </option>
										<option value="Brazil"> Brazil </option>
										<option value="Brunei"> Brunei </option>
										<option value="Bulgaria"> Bulgaria </option>
										<option value="Burkina Faso"> Burkina Faso </option>
										<option value="Burundi"> Burundi </option>
										<option value="Cambodia"> Cambodia </option>
										<option value="Cameroon"> Cameroon </option>
										<option value="Canada"> Canada </option>
										<option value="Cape Verde"> Cape Verde </option>
										<option value="Cayman Islands"> Cayman Islands </option>
										<option value="Central African Republic"> Central African Republic </option>
										<option value="Chad"> Chad </option>
										<option value="Chile"> Chile </option>
										<option value="People's Republic of China"> People's Republic of China </option>
										<option value="Republic of China"> Republic of China </option>
										<option value="Christmas Island"> Christmas Island </option>
										<option value="Cocos (Keeling) Islands"> Cocos (Keeling) Islands </option>
										<option value="Colombia"> Colombia </option>
										<option value="Comoros"> Comoros </option>
										<option value="Congo"> Congo </option>
										<option value="Cook Islands"> Cook Islands </option>
										<option value="Costa Rica"> Costa Rica </option>
										<option value="Cote d'Ivoire"> Cote d'Ivoire </option>
										<option value="Croatia"> Croatia </option>
										<option value="Cuba"> Cuba </option>
										<option value="Cyprus"> Cyprus </option>
										<option value="Czech Republic"> Czech Republic </option>
										<option value="Denmark"> Denmark </option>
										<option value="Djibouti"> Djibouti </option>
										<option value="Dominica"> Dominica </option>
										<option value="Dominican Republic"> Dominican Republic </option>
										<option value="Ecuador"> Ecuador </option>
										<option value="Egypt"> Egypt </option>
										<option value="El Salvador"> El Salvador </option>
										<option value="Equatorial Guinea"> Equatorial Guinea </option>
										<option value="Eritrea"> Eritrea </option>
										<option value="Estonia"> Estonia </option>
										<option value="Ethiopia"> Ethiopia </option>
										<option value="Falkland Islands"> Falkland Islands </option>
										<option value="Faroe Islands"> Faroe Islands </option>
										<option value="Fiji"> Fiji </option>
										<option value="Finland"> Finland </option>
										<option value="France"> France </option>
										<option value="French Polynesia"> French Polynesia </option>
										<option value="Gabon"> Gabon </option>
										<option value="The Gambia"> The Gambia </option>
										<option value="Georgia"> Georgia </option>
										<option value="Germany"> Germany </option>
										<option value="Ghana"> Ghana </option>
										<option value="Gibraltar"> Gibraltar </option>
										<option value="Greece"> Greece </option>
										<option value="Greenland"> Greenland </option>
										<option value="Grenada"> Grenada </option>
										<option value="Guadeloupe"> Guadeloupe </option>
										<option value="Guam"> Guam </option>
										<option value="Guatemala"> Guatemala </option>
										<option value="Guernsey"> Guernsey </option>
										<option value="Guinea"> Guinea </option>
										<option value="Guinea-Bissau"> Guinea-Bissau </option>
										<option value="Guyana"> Guyana </option>
										<option value="Haiti"> Haiti </option>
										<option value="Honduras"> Honduras </option>
										<option value="Hong Kong"> Hong Kong </option>
										<option value="Hungary"> Hungary </option>
										<option value="Iceland"> Iceland </option>
										<option selected="selected" value="India"> India </option>
										<option value="Indonesia"> Indonesia </option>
										<option value="Iran"> Iran </option>
										<option value="Iraq"> Iraq </option>
										<option value="Ireland"> Ireland </option>
										<option value="Israel"> Israel </option>
										<option value="Italy"> Italy </option>
										<option value="Jamaica"> Jamaica </option>
										<option value="Japan"> Japan </option>
										<option value="Jersey"> Jersey </option>
										<option value="Jordan"> Jordan </option>
										<option value="Kazakhstan"> Kazakhstan </option>
										<option value="Kenya"> Kenya </option>
										<option value="Kiribati"> Kiribati </option>
										<option value="North Korea"> North Korea </option>
										<option value="South Korea"> South Korea </option>
										<option value="Kosovo"> Kosovo </option>
										<option value="Kuwait"> Kuwait </option>
										<option value="Kyrgyzstan"> Kyrgyzstan </option>
										<option value="Laos"> Laos </option>
										<option value="Latvia"> Latvia </option>
										<option value="Lebanon"> Lebanon </option>
										<option value="Lesotho"> Lesotho </option>
										<option value="Liberia"> Liberia </option>
										<option value="Libya"> Libya </option>
										<option value="Liechtenstein"> Liechtenstein </option>
										<option value="Lithuania"> Lithuania </option>
										<option value="Luxembourg"> Luxembourg </option>
										<option value="Macau"> Macau </option>
										<option value="Macedonia"> Macedonia </option>
										<option value="Madagascar"> Madagascar </option>
										<option value="Malawi"> Malawi </option>
										<option value="Malaysia"> Malaysia </option>
										<option value="Maldives"> Maldives </option>
										<option value="Mali"> Mali </option>
										<option value="Malta"> Malta </option>
										<option value="Marshall Islands"> Marshall Islands </option>
										<option value="Martinique"> Martinique </option>
										<option value="Mauritania"> Mauritania </option>
										<option value="Mauritius"> Mauritius </option>
										<option value="Mayotte"> Mayotte </option>
										<option value="Mexico"> Mexico </option>
										<option value="Micronesia"> Micronesia </option>
										<option value="Moldova"> Moldova </option>
										<option value="Monaco"> Monaco </option>
										<option value="Mongolia"> Mongolia </option>
										<option value="Montenegro"> Montenegro </option>
										<option value="Montserrat"> Montserrat </option>
										<option value="Morocco"> Morocco </option>
										<option value="Mozambique"> Mozambique </option>
										<option value="Myanmar"> Myanmar </option>
										<option value="Nagorno-Karabakh"> Nagorno-Karabakh </option>
										<option value="Namibia"> Namibia </option>
										<option value="Nauru"> Nauru </option>
										<option value="Nepal"> Nepal </option>
										<option value="Netherlands"> Netherlands </option>
										<option value="Netherlands Antilles"> Netherlands Antilles </option>
										<option value="New Caledonia"> New Caledonia </option>
										<option value="New Zealand"> New Zealand </option>
										<option value="Nicaragua"> Nicaragua </option>
										<option value="Niger"> Niger </option>
										<option value="Nigeria"> Nigeria </option>
										<option value="Niue"> Niue </option>
										<option value="Norfolk Island"> Norfolk Island </option>
										<option value="Turkish Republic of Northern Cyprus"> Turkish Republic of Northern Cyprus </option>
										<option value="Northern Mariana"> Northern Mariana </option>
										<option value="Norway"> Norway </option>
										<option value="Oman"> Oman </option>
										<option value="Pakistan"> Pakistan </option>
										<option value="Palau"> Palau </option>
										<option value="Palestine"> Palestine </option>
										<option value="Panama"> Panama </option>
										<option value="Papua New Guinea"> Papua New Guinea </option>
										<option value="Paraguay"> Paraguay </option>
										<option value="Peru"> Peru </option>
										<option value="Philippines"> Philippines </option>
										<option value="Pitcairn Islands"> Pitcairn Islands </option>
										<option value="Poland"> Poland </option>
										<option value="Portugal"> Portugal </option>
										<option value="Puerto Rico"> Puerto Rico </option>
										<option value="Qatar"> Qatar </option>
										<option value="Romania"> Romania </option>
										<option value="Russia"> Russia </option>
										<option value="Rwanda"> Rwanda </option>
										<option value="Saint Barthelemy"> Saint Barthelemy </option>
										<option value="Saint Helena"> Saint Helena </option>
										<option value="Saint Kitts and Nevis"> Saint Kitts and Nevis </option>
										<option value="Saint Lucia"> Saint Lucia </option>
										<option value="Saint Martin"> Saint Martin </option>
										<option value="Saint Pierre and Miquelon"> Saint Pierre and Miquelon </option>
										<option value="Saint Vincent and the Grenadines"> Saint Vincent and the Grenadines </option>
										<option value="Samoa"> Samoa </option>
										<option value="San Marino"> San Marino </option>
										<option value="Sao Tome and Principe"> Sao Tome and Principe </option>
										<option value="Saudi Arabia"> Saudi Arabia </option>
										<option value="Senegal"> Senegal </option>
										<option value="Serbia"> Serbia </option>
										<option value="Seychelles"> Seychelles </option>
										<option value="Sierra Leone"> Sierra Leone </option>
										<option value="Singapore"> Singapore </option>
										<option value="Slovakia"> Slovakia </option>
										<option value="Slovenia"> Slovenia </option>
										<option value="Solomon Islands"> Solomon Islands </option>
										<option value="Somalia"> Somalia </option>
										<option value="Somaliland"> Somaliland </option>
										<option value="South Africa"> South Africa </option>
										<option value="South Ossetia"> South Ossetia </option>
										<option value="Spain"> Spain </option>
										<option value="Sri Lanka"> Sri Lanka </option>
										<option value="Sudan"> Sudan </option>
										<option value="Suriname"> Suriname </option>
										<option value="Svalbard"> Svalbard </option>
										<option value="Swaziland"> Swaziland </option>
										<option value="Sweden"> Sweden </option>
										<option value="Switzerland"> Switzerland </option>
										<option value="Syria"> Syria </option>
										<option value="Taiwan"> Taiwan </option>
										<option value="Tajikistan"> Tajikistan </option>
										<option value="Tanzania"> Tanzania </option>
										<option value="Thailand"> Thailand </option>
										<option value="Timor-Leste"> Timor-Leste </option>
										<option value="Togo"> Togo </option>
										<option value="Tokelau"> Tokelau </option>
										<option value="Tonga"> Tonga </option>
										<option value="Transnistria Pridnestrovie"> Transnistria Pridnestrovie </option>
										<option value="Trinidad and Tobago"> Trinidad and Tobago </option>
										<option value="Tristan da Cunha"> Tristan da Cunha </option>
										<option value="Tunisia"> Tunisia </option>
										<option value="Turkey"> Turkey </option>
										<option value="Turkmenistan"> Turkmenistan </option>
										<option value="Turks and Caicos Islands"> Turks and Caicos Islands </option>
										<option value="Tuvalu"> Tuvalu </option>
										<option value="Uganda"> Uganda </option>
										<option value="Ukraine"> Ukraine </option>
										<option value="United Arab Emirates"> United Arab Emirates </option>
										<option value="United Kingdom"> United Kingdom </option>
										<option value="Uruguay"> Uruguay </option>
										<option value="Uzbekistan"> Uzbekistan </option>
										<option value="Vanuatu"> Vanuatu </option>
										<option value="Vatican City"> Vatican City </option>
										<option value="Venezuela"> Venezuela </option>
										<option value="Vietnam"> Vietnam </option>
										<option value="British Virgin Islands"> British Virgin Islands </option>
										<option value="US Virgin Islands"> US Virgin Islands </option>
										<option value="Wallis and Futuna"> Wallis and Futuna </option>
										<option value="Western Sahara"> Western Sahara </option>
										<option value="Yemen"> Yemen </option>
										<option value="Zambia"> Zambia </option>
										<option value="Zimbabwe"> Zimbabwe </option>
										<option value="other"> Other </option>
									  </select>
									  &nbsp;&nbsp;<span class="info" id="zip_info">6 digit Zip</span>
									</div>
								</div>
								<div class="pure-control-group">
									<div class="form_label">
										<label for="Height">Height (in Inches)<span class="required">*</span></label>
									</div>
									<div class="form_input">
										<input id="height" name="height"  type="text" placeholder="Ex: 5'11''" required>
										&nbsp;&nbsp;<span class="info" id="height_info">Format: 5'11" i.e 5 feet 11 inches</span>
									</div>
								</div>
								<div class="pure-control-group">
									<div class="form_label">
										<label for="Vital-Stats">Vital Stats<span class="required">*</span></label>
									</div>
									<div class="form_input">
										<input name="stats"  id="stats" type="text" placeholder="36-24-36" required>
										&nbsp;&nbsp;<span class="info" id="stats_info">Format: 36-22-36</span>
									</div>
								</div>
								<div class="pure-control-group">
									<div class="form_label">
										<label for="photographs">Photograph (full shot - required)<span class="required">*</span></label>
									</div>
									<div class="form_input">
										<input id="photo1" name="images_1" type="file" required  accept="image/*">
										&nbsp;&nbsp;
										<span class="info" id="photo_info">This one is necessary</span>
									</div>
								</div>
								<div class="pure-control-group">
									<div class="form_label">
										<label for="photographs">Photograph (medium shot)</label>
									</div>
									<div class="form_input">
										<input id="photo2" name="images_2" type="file"  accept="image/*">
									</div>
								</div>
								<div class="pure-control-group">
									<div class="form_label">
										<label for="photographs">Photograph (close-up shot)</label>
									</div>
									<div class="form_input">
										<input id="photo3" name="images_3" type="file" accept="image/*">
										&nbsp;&nbsp;
										<span class="info" id="photo_info">1 or more necessary</span>
									</div>
								</div>
								<div class="pure-controls" style="margin-top: 20px;">
									<label for="cb" class="pure-checkbox">
										<input id="cb" type="checkbox" required> I've read the terms and conditions
									</label>
									<div class="form_input">
									<button type="submit" onclick="jsv();return false;" style="width:61px">Submit</button>
									</div>
								</div>
								
							</fieldset>
						</form>
					</div>
				</div>
				
				<div class="clearfix" style="height:100px"></div>
				<div class="clearfix" style="height:100px"></div>
				<div class="clearfix" style="height:100px"></div>
				<div class="clearfix" style="height:100px"></div>
				<div class="clearfix" style="height:100px"></div>
			</div>
			<div on="contact" id="contact" style="text-align:left">
				<div class="clearfix" style="height:10px"></div>
				<div class="space">
					<h3>Contact Us</h3>
					<div class="contact_info" style="text-align:center">
						<div class="clearfix" style="height:20px;"></div>
						
						<div class='contactinfotab'>
							Vistar Singh<br>
							+91-8010001588<br>
							Event Head DTU
						</div>
						<div class='contactinfotab'>
							Jayesh Khatri<br>
							+91-9650167501<br>
							Event Head DTU
						</div>
						<div class='contactinfotab'>
							Bennett Nathan<br>
							+91-7666242010<br>
							Miss India Organisation
						</div>
						
					</div>
				</div>
				
				<div class="clearfix" style="height:100px"></div>
				<div class="clearfix" style="height:100px"></div>
				<div class="clearfix" style="height:100px"></div>
				<div class="clearfix" style="height:100px"></div>
				<div class="clearfix" style="height:100px"></div>
			</div>
		</div>
	
	</section>
</body>

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="js/jquery.mousewheel.js"></script>
<script src="js/perfect-scrollbar.js"></script>

<script>
$(document).ready(function(){
        $('#registerform').perfectScrollbar();
      });
var st = 0;
	$(document).ready(function(){
		<?php
		if(isset($_GET['code']))
		{
			echo "$('#notification').fadeIn();";
		} ?>
		$('#notification').click(function(){
			$(this).fadeOut();
		});
		$(".menu ul li").click(function(){
			var goto = $(this).attr("goto");
			try
			{
				st = $("#"+goto).offset().top + st;
				$('.right').animate({
					scrollTop: st},
				'slow');
			}
			catch(err)
			{
				console.log(err);
			}
			if(goto == "engifest")
			{
				window.location.href = "../";
			}
			else if(goto == "home")
			{
				document.getElementById('myvideo').play();
			}
			else
			{
				document.getElementById('myvideo').pause();
			}
		});
		
	});
	
	
var images = new Array();
images[0] = "img/bg.jpg";
var freq = 5000;
var t;
var count = 0;
function animate()
{
	count++;
	if(count == images.length)
		count = 0;
	$("body").css("background-image","url("+images[count]+")");
	t = setTimeout(function(){animate();},freq);
}
animate();

var image_to_load = new Array();

image_to_load[0] = "img/bg1.jpg";
image_to_load[1] = "img/bg2.jpg";
//image_to_load[2] = "img/bg3.jpg";
//image_to_load[3] = "img/bg4.jpg";
for(i = 0;i<image_to_load.length;i++)
{
	var img = new Image();
	img.src = image_to_load[i];
	img.onload = function(obj){
		images[images.length] = obj.srcElement.src;
		console.log(obj.srcElement.src + "loaded to memory");
	}
}

function jsv()
{
	var error = 0;
	var fname = document.getElementById('fname').value;	//done
	var lname = document.getElementById('lname').value;	//done
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var clgname = document.getElementById('clgname').value;
	var address1 = document.getElementById('address1').value;
	var address2 = document.getElementById('address2').value;
	var city = document.getElementById('city').value;	//done
	var state = document.getElementById('state').value; 	//done
	var zip = document.getElementById('zip').value;
	var height = document.getElementById('height').value;
	var stats = document.getElementById('stats').value;
	var regexp = /[A-Za-z ]{1,}/i;
	var matches_array = fname.match(regexp);
	if(matches_array == null || fname != matches_array[0])
	{
		$("#name_info").fadeIn();
		error++;
	}
	else $("#name_info").fadeOut();

	matches_array = lname.match(regexp);
	if(matches_array == null || lname != matches_array[0])
	{
		$("#name_info").fadeIn();
		error++;
	}
	else if(error == 0)$("#name_info").fadeOut();

	var location_flag = 0;
	matches_array = city.match(regexp);
	if(matches_array == null || city != matches_array[0])
	{
		$("#location_info").fadeIn();
		error++;
		location_flag ++;
	}
	else $("#location_info").fadeOut();

	matches_array = state.match(regexp);
	if(matches_array == null || state != matches_array[0])
	{
		$("#location_info").fadeIn();
		error++;
	}
	else if(location_flag==0)$("#location_info").fadeOut();

	regexp = /\d{6}/i;
	matches_array = zip.match(regexp);
	if(matches_array == null || zip != matches_array[0])
	{
		$("#zip_info").fadeIn();
		error++;
	}
	else $("#zip_info").fadeOut();

	regexp = /\d{10}/i;
	matches_array = phone.match(regexp);
	if(matches_array == null || phone != matches_array[0])
	{
		$("#phone_info").fadeIn();
		error++;
	}
	else $("#phone_info").fadeOut();

	regexp = /\d\'\d{1,2}\"/i;
	matches_array = height.match(regexp);
	if(matches_array == null || height != matches_array[0])
	{
		$("#height_info").fadeIn();
		error++;
	}
	else $("#height_info").fadeOut();

	regexp = /\d{2}-\d{2}-\d{2}/i;
	matches_array = stats.match(regexp);
	if(matches_array == null || stats != matches_array[0])
	{
		$("#stats_info").fadeIn();
		error++;
	}
	else $("#stats_info").fadeOut();

	if(error == 0)
	{
		console.log("error = 0");
		$("#myform").attr("action","http://www.cistoner.org/dtu/femina/index.php");
		document.getElementById('myform').submit();

	}
}


//loading images to gallery
var max = $(".galleryspace div").length;
var c = 0;
var gallery = new Array();
gallery[0] = "img/1.jpg";
gallery[1] = "img/2.jpg";
gallery[2] = "img/3.jpg";
gallery[3] = "img/4.jpg";
gallery[3] = "img/1.jpg";
for(i = 0;i<gallery.length;i++)
{
	var img = new Image();
	img.src = gallery[i];
	img.onload = function(obj){
		var loaded = obj.srcElement.src;
		if(c == max)
		{
			max++;
			$(".galleryspace").append("<div></div>");
		}
		$(".galleryspace div:eq("+c+")").html("<img src='"+loaded+"' height='200px'>");
		c++;
	}
}

</script>
</head>
</html>