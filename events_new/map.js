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
$("#div1").click(function()
{

    console.log("inside foo");
    $("#big-container").removeClass('shrink').addClass('e1Left');
    $("#big-container").addClass('expandLeft');
      
});
$("#div2").click(function()
{

    console.log("inside foo");
    $("#big-container").removeClass('shrink').addClass('e1Right');
    $("#big-container").addClass('expandRight');
      
});$("#div3").click(function()
{

    console.log("inside foo");
    $("#big-container").removeClass('shrink').addClass('e1Left');
    $("#big-container").addClass('expandLeft');
      
});$("#div4").click(function()
{

    console.log("inside foo");
    $("#big-container").removeClass('shrink').addClass('e1Right');
    $("#big-container").addClass('expandRight');
      
});$("#div5").click(function()
{

    console.log("inside foo");
    $("#big-container").removeClass('shrink').addClass('e1Left');
    $("#big-container").addClass('expandLeft');
      
});$("#div6").click(function()
{

    console.log("inside foo");
    $("#big-container").removeClass('shrink').addClass('e1Right');
    $("#big-container").addClass('expandRight');
      
});$("#div7").click(function()
{

    console.log("inside foo");
    $("#big-container").removeClass('shrink').addClass('e1Left');
    $("#big-container").addClass('expandLeft');
      
});$("#div8").click(function()
{

    console.log("inside foo");
    $("#big-container").removeClass('shrink').addClass('e1Right');
    $("#big-container").addClass('expandRight');
      
}); 
document.getElementById('div1').onclick=funca1;
document.getElementById('div2').onclick=funca2;
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