$(document).ready(function(){
	$('.hector09_menutab').click(function(){
var slide = $(this).attr('slide');
if(slide == -1)return 0;
if(slide == 0)
{
	$('html,body').animate({scrollTop: 0},1000);
	return;
}

if(slide == 5)
{
	registershow();
	return 0;
}
if(slide == 6)
{
	$('#webteam-content').animate({
	left: '50%' },1000);
	return;
}
$('html,body').animate({
scrollTop: $(".item-"+slide).offset().top -100 },1000);
	});
	$(".hector09_audio_controls_ON").click(function(){
$('.hector09_audio_controls_ON').css('opacity','.2');
$('.hector09_audio_controls_OFF').css('opacity','1');
document.getElementById("bgMusic").volume = .8;
	});
	$(".hector09_audio_controls_OFF").click(function(){
$('.hector09_audio_controls_OFF').css('opacity','.2');
$('.hector09_audio_controls_ON').css('opacity','1');
document.getElementById("bgMusic").volume = 0;
	});
});
$("#webteam-content .close").click(function(){
	$("#webteam-content").animate({left:"110%"},1000);
});
/**
 * for innerpage
 */
$(document).ready(function(){
//$(".bane94-tab-description[tabid='1']").fadeIn();

	$(document).on("click",".bane94-tabs div",function(){
		var current = parseInt($(".bane94-tabs div[class='active']").attr("toload"));
		$(".bane94-tabs div[class='active']").removeClass("active");
		$(this).addClass("active");
		var next = parseInt($(".bane94-tabs div[class='active']").attr("toload"));
		$(".bane94-tab-description[tabid='" +current +"']").fadeOut(function(){
			$(".bane94-tab-description[tabid='" +next +"']").fadeIn(function(){
				$("#bane94-innerpage .right .bane94-description").mCustomScrollbar("update");
			});
		});	
	});
});