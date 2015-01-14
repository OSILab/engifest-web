$(document).ready(function()
{
loader=$('#loader');
scroll=$('#scroll');
insert=$('#insert');
window_width=$(window).width();
window_height=$(window).height();
loader.css('height',(window_height*0.75)).css('width',(window_width/2)-100);
$(window).resize(function()
{
window_width=$(window).width();
window_height=$(window).height();
loader.css('height',(window_height*0.75)).css('width',(window_width/2)-100);
});

scroll.click(function()
{
insert.load("temp.txt", function()
{
scroll.css('display','none');
loader.slideDown(3000);
});

});

$('#button').click(function()
{
loader.css('display','none');
scroll.css('display','block');
});


});