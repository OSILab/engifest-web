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

//document.getElementById('l').onclick=func;
document.getElementById('div1').addEventListener('mouseover',funca1);
document.getElementById('div2').addEventListener('mouseover',funca2);
document.getElementById('div3').addEventListener('mouseover',funca3);
document.getElementById('div4').addEventListener('mouseover',funca1);
document.getElementById('div5').addEventListener('mouseover',funca2);
document.getElementById('div6').addEventListener('mouseover',funca3);


document.getElementById('div1').addEventListener('mouseout',func2);
document.getElementById('div2').addEventListener('mouseout',func2);
document.getElementById('div3').addEventListener('mouseout',func2);

document.getElementById('div4').addEventListener('mouseout',func2);
document.getElementById('div5').addEventListener('mouseout',func2);
document.getElementById('div6').addEventListener('mouseout',func2);