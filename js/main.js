var startTime = new Date();
function showElapsedTime() {
var testSiteUrl = location.href;
var testSiteString = String(testSiteUrl).slice(testSiteUrl.indexOf("www"));
var endTime = new Date();
var elapsedTime = Number(endTime-startTime);
var browser=navigator.userAgent;
var platform=navigator.platform;
var msgString = "Speed " + Number(elapsedTime/1000) + " second (" + elapsedTime + " ms)<br/>";
document.getElementById("vremia").innerHTML = msgString;
}
onload=function() {showElapsedTime();}

var app = new Vue({
    el: '#app',
    data: {
        message: 0,
        message2:'hide',
        seen:true
    },
    methods: {
        showConsole : function () {
                if (this.message === 10||this.message === 'restore'){
                    this.message = 'restore';
                    return;
                } else {
                    this.message +=1
                    console.log(this.message);
                }
        },
        reload: function () {
            if ( this.message === 'restore'){
                this.message = 0;
                console.log('star restore')
            }
        },
        showLogo: function () {
            this.seen = !this.seen
            if (this.message2 === 'hide'){
                this.message2 = 'show'
            } else {
                this.message2 = 'hide'
            }
        }
    }
});
setTimeout(function () {
    $('body').css({
        'background-position':' center 500px'
    })
    $('#app').css({
        'background-position':' 70% 55%'
    })
},100);
$(function(){
    $("#includedContent").load("https://eugene313.github.io/jiva/index.html");
});