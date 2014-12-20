$(document).ready(function(e){
 var i = 0;
 // create object
     imageObj = new Image();
	 imageObj1=new Image();
	 imageObj2=new Image();
	 imageObj3=new Image();
	 imageObj4=new Image();
	 // set image list
     images = new Array();
     images[0]="event1.jpg";
     images[1]="event2.jpg";
	 images[2]="event3.jpg";
	  images[3]="event4.jpg";
	   images[4]="event5.jpg";
	// start preloading
          imageObj.src=images[0];
		  imageObj1.src=images[1];
		  imageObj2.src=images[2];
		  imageObj3.src=images[3];
		  imageObj4.src=images[4];
		  
$('#cd-timeline').find('a').on('click',function(e){
e.preventDefault();
$('#cd-timeline').hide();
//$('#cd-timeline').css("visibility","hidden");
var desc=$('#hiddendiv');
var timeline=$('#cd-timeline');
switch($(this).attr('id'))
{
case 'div1':
desc.load('events.php?id=1&isAjax=true');
break;
case 'div2':
desc.load('events.php?id=2&isAjax=true');
break;
case 'div3':
desc.load('events.php?id=3&isAjax=true');
break;
case 'div4':
desc.load('events.php?id=4&isAjax=true');
break;
case 'div5':
desc.load('events.php?id=5&isAjax=true');
break;
}

desc.css("visibility","visible");


});

$('#cd-timeline').find('a').hover(function(){
switch($(this).attr('id'))
{
case 'div1':
$('#first').css('background-image','url(event1.jpg)');
break;
case 'div2':
$('#first').css('background-image','url(event2.jpg)');
break;
case 'div3':
$('#first').css('background-image','url(event3.jpg)');
break;
case 'div4':
$('#first').css('background-image','url(event4.jpg)');
break;
case 'div5':
$('#first').css('background-image','url(event5.jpg)');
break;
}
$('#div1').css('opacity','0');
$('#div2').css('opacity','0');
$('#div3').css('opacity','0');
$('#div4').css('opacity','0');
$('#div5').css('opacity','0');
$('#div6').css('opacity','0');
$('#div7').css('opacity','0');
$('#div8').css('opacity','0.0');
$('#div9').css('opacity','0.0');
$('#div10').css('opacity','0.0');
$('#div11').css('opacity','0.0');
$('#div12').css('opacity','0.0');
$('#div13').css('opacity','0.0');
$(this).css('opacity','1');
},
function()
{
$('#first').css('background-image','url(css/dj.jpg)');
$('#div1').css('opacity','1');
$('#div2').css('opacity','1');
$('#div3').css('opacity','1');
$('#div4').css('opacity','1');
$('#div5').css('opacity','1');
$('#div6').css('opacity','1.0');
$('#div7').css('opacity','1.0');
$('#div8').css('opacity','1.0');
$('#div9').css('opacity','1.0');
$('#div10').css('opacity','1.0');
$('#div11').css('opacity','1.0');
$('#div12').css('opacity','1.0');
$('#div13').css('opacity','1.0');
});
// not working
/*$('#back').find('a').on('click',function(e){
e.preventDefault();
alert("yeah u clicked it");
$('#hiddendiv').css('visibility','hidden');
});
*/
});