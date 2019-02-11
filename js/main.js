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
        forvard:true,
        home: "Home",
        summary:"Summary",
        contact:"Contacts",
        night:"Night",
        dayOn:"Day",
        object:null,
        totalDay : null
    },
    methods: {
        transLate: function () {
            if (this.forvard === true){
                this.forvard = false
                this.home = "Главная";
                this.summary = "Резюме";
                this. contact = "Контакты";
                this. night = "Ночь";
                this. dayOn = "День";
            }
             else {
                this.forvard = true
                this.home = "Home";
                this.summary = "Summary";
                this. contact = "Contacts";
                this. night = "Night";
                this. dayOn = "Day";
            }
        }
    }
});
setTimeout( wakeUp = function () {
    $('body').css({
        'background-position':' center 600px'
    })
    $('#app').css({
        'background-position':' 70% 55%'
    })
},100);

$('#sleep').click(function () {
    $('body').css({
        'background-position':' center 1400px'
    })
    $('#app').css({
        'background-position':' 90% 120%'
    })
})
$('#wakeup').click(wakeUp)
$('#reload').click(function () {
    location.reload();
})

var xhr = new XMLHttpRequest();
xhr.open('GET', '../example.json', false);
xhr.send()
if (xhr.status != 200) {
    // обработать ошибку
    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
    //console.log(xhr.responseText);
    app._data.object = JSON.parse(xhr.responseText);
    console.log(app._data.object);
    app._data.totalDay = app._data.object.reduce((acc.val) => acc + val.totalDay,0);
    console.log(app._data.totalDay);
}
$('.add-data').click(function () {
$('.form-data').toggleClass("form-data-active");
})