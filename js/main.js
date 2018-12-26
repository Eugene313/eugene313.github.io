/*speed test start*/

var startTime = new Date();
function showElapsedTime() {
var testSiteUrl = location.href;;
var testSiteString = String(testSiteUrl).slice(testSiteUrl.indexOf("www"));
var endTime = new Date();
var elapsedTime = Number(endTime-startTime);
var browser=navigator.userAgent;
var platform=navigator.platform;
var msgString = "Speed " + Number(elapsedTime/1000) + " second (" + elapsedTime + " ms)<br/>";
document.getElementById("vremia").innerHTML = msgString;
}
onload=function() {showElapsedTime();}

/*speed test end*/


$('.portfolio-title span').click(function () {
    $('.portfolio-title').animate({left:'100%'},900);
});
$('.close').click(function () {
    $('.portfolio-title').animate({left:'0'},900);
});

/*Slider start*/

var slider = [".html",".css",".js"];
var marker = $('.line');
var i = 0;
var sliderTimer = function(){
    $(slider[i]).animate({left:'-100%'},500);
    $(marker[i]).toggleClass('line-active');
    i = (i+1)%slider.length;
    $(slider[i]).animate({top:'0'},500);
    $(marker[i]).toggleClass('line-active');
    --i;
    if (i < 0){i=2};
    $(slider[i]).animate({top:'100%'},50);
    $(slider[i]).animate({left:'30px'},50);
    return i = (i+1)%slider.length;
};
setInterval(sliderTimer,7000);

/* Slider end */

$('.menu-html').click(function () {
    $('.menu-html').css('background','#9a0000');
    $('.slider-html').css('opacity','1');
    $('.slider-css').css('opacity','0');
    $('.slider-js').css('opacity','0');

    $('.menu-css').css('background','#313131');
    $('.menu-js').css('background','#313131');
});
$('.menu-css').click(function () {
    $('.menu-css').css('background','#9a0000');
    $('.slider-css').css('opacity','1');
    $('.slider-html').css('opacity','0');
    $('.slider-js').css('opacity','0');
    $('.menu-html').css('background','#313131');
    $('.menu-js').css('background','#313131');
});
$('.menu-js').click(function () {
    $('.menu-js').css('background','#9a0000');
    $('.slider-js').css('opacity','1');
    $('.slider-html').css('opacity','0');
    $('.slider-css').css('opacity','0');
    $('.menu-html').css('background','#313131');
    $('.menu-css').css('background','#313131');
});







