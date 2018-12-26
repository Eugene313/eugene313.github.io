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


$('.portfolio-title span').click(function () {
    $('.portfolio-title').animate({left:'100%'},600);
});

var slider = [".html",".css",".js"];
var i = 0;
var sliderTimer = function(){
    $(slider[i]).animate({left:'-100%'},500);
    i = (i+1)%slider.length;
    $(slider[i]).animate({top:'0'},500);
    --i;
    if (i < 0){i=2}
    $(slider[i]).animate({top:'100%'},50);
    $(slider[i]).animate({left:'30px'},50);
    return i = (i+1)%slider.length;
};
setInterval(sliderTimer,5000);



