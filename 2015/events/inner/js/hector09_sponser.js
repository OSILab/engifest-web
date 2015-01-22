/**
 * variables contrlling the animation
 */
 var co_freq = 6000;
 var co_t;
 var sp_freq = 3000;
 var sp_t;
 
 
 /**
 * for co sponser
 */
 function switchCoImage()
 {
	var source1;
	var source2;
	$('#cosponser3').css("top","0px");
	$('#cosponser4').css("top","0px");
	source1 = $('#cosponser1').attr("src");
	source2 = $('#cosponser2').attr("src");
	$('#cosponser1').animate({opacity:0},1000,function(){
		$('#cosponser1').remove();
		$('#cosponser2').remove();
		$(".hector09_cotitle_1").append('<img src="' +source1 +'" id="cosponser3" style="position: 225px;z-index: 2" title="Co-Sponsers">');
		$(".hector09_cotitle_2").append('<img src="' +source2 +'" id="cosponser4" style="position: 225px;z-index: 2" title="Co-Sponsers">');	
	});
	
	$('#cosponser3').css("z-index","1");
	$('#cosponser4').css("z-index","1");
	$("#cosponser3").attr("id","cosponser1");
	$("#cosponser4").attr("id","cosponser2");
	co_t = setTimeout("switchCoImage()",co_freq);
 }

	 
	/**
	 * for other sponsers
	 */
	
	function switchSpImage()
	{
	/** for top -> bottom quad-1**/
	var imgCount_1 = $(".hector09_nontitle div[box = '2'] img").length;
	var obj1_current = $(".hector09_nontitle div[box = '2'] img[current = 'true']");
	var pos1 = obj1_current.attr("no");
	var i1;
	obj1_current.css("z-index","0");
	var next1 = (parseInt(pos1)+1) % imgCount_1;
	if(!next1)next1 = parseInt(pos1) + 1;
	var obj1_next = $(".hector09_nontitle div[box = '2'] img[no='" +next1 +"']")
	obj1_next.css("top","0px").css("z-index","4");
	obj1_current.animate({opacity:0},700,function(){
		obj1_current.removeAttr("current");
		obj1_current.animate({top:(imgCount_1 - 1)*-1*225},100,function(){
		setTimeout(function(){obj1_current.css("opacity","1");},200);
		});	
	});
	obj1_next.attr("current","true");
	for(i1 = 1;i1 <= imgCount_1;i1++)
	{
		if(i1 != pos1 && i1!= next1)
		{
		var obj = $(".hector09_nontitle div[box = '2'] img[no='" +i1 +"']");
		var top = parseInt(obj.css("top")) + 225;
		obj.css("top",top +"px");
		obj.css("z-index","0");
		}
	}
	/** for left -> right quad-4**/
	var imgCount_2 = $(".hector09_nontitle div[box = '1'] img").length;
	var obj2_current = $(".hector09_nontitle div[box = '1'] img[current = 'true']");
	var pos2 = obj2_current.attr("no");
	var i2;
	obj2_current.css("z-index","0");
	var next2 = (parseInt(pos2)+1) % imgCount_2;
	if(!next2)next2 = parseInt(pos2) + 1;
	var obj2_next = $(".hector09_nontitle div[box = '1'] img[no='" +next2 +"']")
	obj2_next.css("left","0px").css("z-index","4");
	obj2_current.animate({opacity:0},700,function(){
		obj2_current.removeAttr("current");
		obj2_current.animate({left:(imgCount_2 - 1)*-1*240},100,function(){
		setTimeout(function(){obj2_current.css("opacity","1");},200);
		});
	});
	obj2_next.attr("current","true");
	for(i2 = 1;i1 <= imgCount_2;i2++)
	{
		if(i2 != pos2 && i2!= next2)
		{
		var obj = $(".hector09_nontitle div[box = '1'] img[no='" +i2 +"']");
		var left = parseInt(obj.css("left")) + 240;
		obj.css("left",left);
		}
	}
	/** for bottom -> top quad-3**/
	var imgCount_3 = $(".hector09_nontitle div[box = '3'] img").length;
	var obj3_current = $(".hector09_nontitle div[box = '3'] img[current = 'true']");
	var pos3 = obj3_current.attr("no");
	var i3;
	obj3_current.css("z-index","0");
	var next3 = (parseInt(pos3)+1) % imgCount_3;
	if(!next3)next3 = parseInt(pos3) + 1;
	var obj3_next = $(".hector09_nontitle div[box = '3'] img[no='" +next3 +"']")
	obj3_next.css("top","0px").css("z-index","4");
	obj3_current.animate({opacity:0},700,function(){
		obj3_current.removeAttr("current");
		obj3_current.animate({top:(imgCount_3 - 1)*225},100,function(){
		setTimeout(function(){obj3_current.css("opacity","1");},200);
		});	
	});
	obj3_next.attr("current","true");
	for(i3 = 1;i3 <= imgCount_3;i3++)
	{
		if(i3 != pos3 && i3!= next3)
		{
		var obj = $(".hector09_nontitle div[box = '3'] img[no='" +i3 +"']");
		var top = parseInt(obj.css("top")) + 225;
		obj.css("top",top +"px");
		obj.css("z-index","0");
		}
	}
	/** for right -> left quad-2**/
	var imgCount_4 = $(".hector09_nontitle div[box = '4'] img").length;
	var obj4_current = $(".hector09_nontitle div[box = '4'] img[current = 'true']");
	var pos4 = obj4_current.attr("no");
	var i4;
	obj4_current.css("z-index","0");
	var next4 = (parseInt(pos4)+1) % imgCount_4;
	if(!next4)next4 = parseInt(pos4) + 1;
	var obj4_next = $(".hector09_nontitle div[box = '4'] img[no='" +next4 +"']")
	obj4_next.css("left","0px").css("z-index","4");
	obj4_current.animate({opacity:0},700,function(){
		obj4_current.removeAttr("current");
		obj4_current.animate({left:(imgCount_4 - 1)*240},100,function(){
		setTimeout(function(){obj4_current.css("opacity","1");},200);
		});
	});
	obj4_next.attr("current","true");
	for(i4 = 1;i4 <= imgCount_4;i4++)
	{
		if(i4 != pos4 && i4!= next4)
		{
		var obj = $(".hector09_nontitle div[box = '1'] img[no='" +i4 +"']");
		var left = parseInt(obj.css("left")) + 240;
		obj.css("left",left);
		}
	}
	sp_t = setTimeout("switchSpImage()",sp_freq);
	}

/**
 * calling abouve functions for one time 
 * or igniting the above functions on 
 * DOM ready event
 */ 
$(document).ready(function(){
	switchCoImage();
	switchSpImage();
	});	
	

/**
 * code to automatically give positions to different images in sponsers section
 * thus enabling us to make the code run for any no of images
 */ 
	$(document).ready(function(){
	var boxCount = 4;
	var i;
	var j;
	for(i=1;i<=boxCount;i++)
	{
		var itemsCount = $(".hector09_nontitle div[box = '" +i +"'] img").length;
		for(j=0;j<itemsCount;j++)
		{
		if(i==1)$(".hector09_nontitle div[box = '" +i +"'] img:eq(" +j +")").css("left",-j*240);
		if(i==2)$(".hector09_nontitle div[box = '" +i +"'] img:eq(" +j +")").css("top",-j*225);
		if(i==3)$(".hector09_nontitle div[box = '" +i +"'] img:eq(" +j +")").css("top",j*225);
		if(i==4)$(".hector09_nontitle div[box = '" +i +"'] img:eq(" +j +")").css("left",-j*240);
		$(".hector09_nontitle div[box = '" +i +"'] img:eq(" +j +")").css("z-index",j);
		}
	}
		
	});