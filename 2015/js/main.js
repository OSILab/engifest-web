/* Created by Gewest13 */
/* www.gewest13.nl   */
/* info@gewest13.nl  */

var MAX_BLOOP_COUNT = 10;


var user;



$(document).ready(function(){

  $("#dcsns-filter").find("a").click(function(){
	 return false; 
  });
  
  
	var pathname = window.location.pathname,
		url_this = pathname.split('/'),
		this_A = url_this[1];


	/*if(this_A == 'nl') 			{ 
		var token = "",
			clientID = "",
			client_secret = "3a6a610948bf4be298055148197c8808",
			redirectUrl = "http://xofestival.nl/nl/xolive";
	}
	else if(this_A == 'en') 	{ 
		var token = "257565991.ae23bc4.5fe076395aff47b189508c591f7d708e",
			clientID = "ae23bc4fe5964ae8acdf67ce8f361f05",
			client_secret = "db67787d50354e11ae7ceebc1b6ec055",
			redirectUrl = "http://xofestival.nl/en/xolive";

	}*/
  
	$('#xolive').dcSocialStream({
	feeds: {
		twitter: {
			id: '#engifest, #engi15, #engifest15, #sunburngoa',
			intro: 'Tweeted',
			search: 'Tweeted',
			out: 'intro,thumb,text,share',
			url: './twitter.php',
			icon: '../groot/twitter.png'
		},

		facebook: {
			id: '417340211725031',
			out: 'intro,thumb,text,user,share',
			icon: '../groot/facebook.png'
		},
		// instagram: {
		// 	id: '#xolive, #xofestival, #extremaoutdoor, #extremafestival, #xo-live',
		// 	redirectUrl: "http://www.pulseaiims.org/en/Social-Wall.php",
		// 	clientId: "ce293bc7384d4e2e96a6f5cc7c81acb3",
		// 	out: 'intro,thumb,text',
		// 	icon: '../groot/instagram.png'
		// }
	},
	rotate: {
		delay: 0
	},
	control: false,
	order: 'random',
	filter: true,
	wall: true,
	cache: false,
	max: 'limit',
	limit: 20,
	iconPath: '/XOfestival/_/js/social-feed/images/dcsns-dark/',
	imagePath: '/XOfestival/_/js/social-feed/images/dcsns-dark/'
	});
	

	$("a[rel^='photo_zoom']").prettyPhoto({
		theme: 'pp_default',
		default_width: 1400,
		default_height: 800,
		gallery_markup: '<div class="pp_gallery"> \
						<a href="#" class="pp_arrow_previous">Previous</a> \
						<a href="#" class="pp_arrow_next">Next</a> \
					</div>'
		
	});
	$("a[rel^='zoom_video']").prettyPhoto({
		theme: 'pp_default',
		default_width: 1400,
		default_height: 800
	});
	
});


$(window).load(function(){
	

	$(".dcsns-youtube .section-thumb a, .dcsns-vimeo .section-thumb a, .dcsns-instagram .section-thumb a").prettyPhoto({
		autoplay_slideshow: false, 
		overlay_gallery: false, 
		social_tools:false, 
		deeplinking: false, 
		theme:'pp_default', 
		show_title: false
	});

});





