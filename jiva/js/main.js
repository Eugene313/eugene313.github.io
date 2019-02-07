// Меню старт
$(window).on("scroll", function() {
  if (window.pageYOffset > 0 ){
        $('nav').css('height','60px')
        $('.blur').css('background','#000')
        $('.blur').css('filter','blur(0)')

  }
  if (window.pageYOffset === 0 ){
        $('nav').css('height','80px')
        $('.blur').css('background','#00000060')
        $('.blur').css('filter','blur(3px)')
}
});

// Заголовок
setTimeout(function(){
    $('header h1').css('opacity','1');
    $('header h4').css('opacity','1')
},400);

// 

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

// paralax

