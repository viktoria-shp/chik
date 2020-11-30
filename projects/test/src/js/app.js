$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
		speed: 700,
		slidesToShow: 1,
		centerMode: true,
		//variableWidth: true,
		lazyLoad: 'ondemand',
        autoplay: true,
        dots: true,
        autoplaySpeed: 4000,
        arrows: false,
    });
});

$(function() {
    $('a[href=nav]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
});    
    $('.cta__btn','.popup__close').on('click', function(e) {
        $('body').addClass('popup-opened');
        $('.cta__btn').css('display:none')
    });
    $('.popup__close').on('click', function(e) {
        $('body').removeClass('popup-opened');
    });
});

$(function(){
    $("#phone").mask("+42 (999) 999-9999");
});

const hamburger = document.querySelector(".navigation__burger");
const navLinks = document.querySelector(".navigation__list");
const links = document.querySelectorAll(".navigation__list li");

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");
});
