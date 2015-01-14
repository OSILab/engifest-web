


function funca1()
{
    console.log("Inside funca1");
    var w=document.getElementById('map');
    w.className="zoom1";
    document.getElementById('q').className="f1";
}

function funca2()
{
    console.log("Inside funca2");
    var w=document.getElementById('map');
    w.className="zoom2";
    document.getElementById('q').className="f2";
}
function funca3()
{
    console.log("Inside funca3");
    var w=document.getElementById('map');
    w.className="zoom3";
    document.getElementById('q').className="f3";
}
function func2()
{
    console.log("Inside func2");
     var w=document.getElementById('map');
    w.className="zoomout";
    document.getElementById('q').className="i";
}

// function foo()
// {
//     console.log("inside foo");
//     document.getElementById('big-container').className='expand';
// }

//document.getElementById('l').onclick=func;
// document.addEventListener('DOMContentLoaded',function(){

//     document.getElementById('div1').onclick=foo();

// });

// $(."see-more").click(function()
// {
//     var i = 0;
//     while( (child = child.previousSibling) != null ) 
//     i++;
// if(i%2==0)
// {
//     $("#big-container").removeClass('shrink').addClass('e1Left');
//     $("#big-container").addClass('expandLeft');
//  }
//  else 
//  {
//     $("#big-container").removeClass('shrink').addClass('e1Right');
//     $("#big-container").addClass('expandRight');
//  }     
// });




$('.see-more, #more').click(function(){
    parent=$(this).closest('.cd-timeline-content');
    index_=$('.cd-timeline-content').index(parent);
        $('.desc').append($(this).attr('event-details'));
        $('.co').append($(this).attr('ename'));
        $('.date').append($(this).attr('date'));
        $('.cd-timeline-block').find('*').fadeOut('slow');
$('.cd-timeline-img').find('*').fadeOut('slow');

    if(index_%2==0)
    {
        
        $("#big-container").removeClass('shrink').addClass('e1Left');
        $("#big-container").addClass('expandLeft');
      
    }
    else
    {   
       $("#big-container").removeClass('shrink').addClass('e1Right');
        $("#big-container").addClass('expandRight');   
    }

    switch(index_)
    {
        case 0:  $("#inrImg").attr("src","css/dj.jpg");
                    break;

                    case 1:  $("#inrImg").attr("src","css/dj.jpg");
                    break;

                    case 2:  $("#inrImg").attr("src","css/dj.jpg");
                    break;

                    case 3:  $("#inrImg").attr("src","css/dj.jpg");
                    break;

                    case 4:  $("#inrImg").attr("src","css/dj.jpg");
                    break;

                    case 5:  $("#inrImg").attr("src","css/dj.jpg");
                    break;

                    case 6:  $("#inrImg").attr("src","css/dj.jpg");
                    break;

                    case 7:  $("#inrImg").attr("src","css/dj.jpg");
                    break;

                    case 8:  $("#inrImg").attr("src","css/dj.jpg");
                    break;

                    case 9:  $("#inrImg").attr("src","css/dj.jpg");
                    break;

                    case 10:  $("#inrImg").attr("src","css/dj.jpg");
                    break;

                    case 11:  $("#inrImg").attr("src","css/dj.jpg");
                    break;

                    case 12:  $("#inrImg").attr("src","css/dj.jpg");
                    break;

                    case 13:  $("#inrImg").attr("src","css/dj.jpg");
                    break;

                    case 14:  $("#inrImg").attr("src","css/dj.jpg");
                    break;
    }
});



$('.header').slideDown(500);
// $("#div1").click(function()
// {
// 	$('.desc').append($(this).find('#more').attr('event-details'));
//     console.log("inside foo");
//     $("#big-container").removeClass('shrink').addClass('e1Left');
//     $("#big-container").addClass('expandLeft');
      
// });
// $("#div2").click(function()
// {
// 	$('.desc').append($(this).find('#more').attr('event-details'));
//     console.log("inside foo");
//     $("#big-container").removeClass('shrink').addClass('e1Right');
//     $("#big-container").addClass('expandRight');
      
// });$("#div3").click(function()
// {
// 	$('.desc').append($(this).find('#more').attr('event-details'));
//     console.log("inside foo");
//     $("#big-container").removeClass('shrink').addClass('e1Left');
//     $("#big-container").addClass('expandLeft');
      
// });$("#div4").click(function()
// {
// 	$('.desc').append($(this).find('#more').attr('event-details'));
//     console.log("inside foo");
//     $("#big-container").removeClass('shrink').addClass('e1Right');
//     $("#big-container").addClass('expandRight');
      
// });$("#div5").click(function()
// {
// 	$('.desc').append($(this).find('#more').attr('event-details'));
//     console.log("inside foo");
//     $("#big-container").removeClass('shrink').addClass('e1Left');
//     $("#big-container").addClass('expandLeft');
      
// });$("#div6").click(function()
// {
// 	$('.desc').append($(this).find('#more').attr('event-details'));
//     console.log("inside foo");
//     $("#big-container").removeClass('shrink').addClass('e1Right');
//     $("#big-container").addClass('expandRight');
      
// });$("#div7").click(function()
// {
// 	$('.desc').append($(this).find('#more').attr('event-details'));
//     console.log("inside foo");
//     $("#big-container").removeClass('shrink').addClass('e1Left');
//     $("#big-container").addClass('expandLeft');
      
// });$("#div8").click(function()
// {
// 	$('.desc').append($(this).find('#more').attr('event-details'));
//     console.log("inside foo");
//     $("#big-container").removeClass('shrink').addClass('e1Right');
//     $("#big-container").addClass('expandRight');
      
// }); 
// document.getElementById('div1').onclick=funca1;
// document.getElementById('div2').onclick=funca2;
// document.getElementById('div3').addEventListener('mouseover',funca3);
// document.getElementById('div4').addEventListener('mouseover',funca1);
// document.getElementById('div5').addEventListener('mouseover',funca2);
// document.getElementById('div6').addEventListener('mouseover',funca3);


// document.getElementById('div1').addEventListener('mouseout',func2);
// document.getElementById('div2').addEventListener('mouseout',func2);
// document.getElementById('div3').addEventListener('mouseout',func2);

// document.getElementById('div4').addEventListener('mouseout',func2);
// document.getElementById('div5').addEventListener('mouseout',func2);
// document.getElementById('div6').addEventListener('mouseout',func2);
