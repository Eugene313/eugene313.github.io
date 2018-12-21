var button = document.getElementById('mobile-menu');
var blockMenu = document.getElementById('menu');



button.onclick = function openMenu(){
	if (blockMenu.classList.contains('active')){
		blockMenu.className = 'menu';
	} else {
		blockMenu.className = 'menu active';
	}
}
$('.title').fadeTo(700,1);
$('.cocacola').click(function(){
    $('.banka-pepsi,.banka-sprite,.banka-fanta').fadeTo(500,0);
    $('.banka-cola').fadeTo(500,1);
    $('.main').css({
        'background':'url(img/bg.png) center center',
        'background-size':'cover'
    });
});
$('.pepsi').click(function(){
    $('.banka-cola,.banka-sprite,.banka-fanta').fadeTo(500,0);
    $('.banka-pepsi').fadeTo(500,1);
    $('.main').css({
        'background':'url(img/bg3.jpg) center center',
        'background-size':'cover'
    });
});
$('.sprite').click(function(){
    $('.banka-cola,.banka-pepsi,.banka-fanta').fadeTo(500,0);
    $('.banka-sprite').fadeTo(500,1);
    $('.main').css({
        'background':'url(img/bg2.jpg) center center',
        'background-size':'cover'
    });
});
$('.fanta').click(function(){
    $('.banka-cola,.banka-pepsi,.banka-sprite').fadeTo(500,0);
    $('.banka-fanta').fadeTo(500,1);
    $('.main').css({
        'background':'url(img/bg4.jpg) center center',
        'background-size':'cover'
    });
});
$(function(){
    $('.main2').mousemove(function(e){
        $('#cube').css({
            'transform':'rotateX('+e.pageY+'deg) rotateY('+e.pageX+'deg)'
        })
    })
})

