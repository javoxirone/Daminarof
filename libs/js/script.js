  $('.hamburger').click(function(){
  	$('.hamburger').toggleClass('is-active')
  	$('.hamburger').toggleClass('clicked')
  });
  $(".banner").slick({
  	dots: false,
  	infinite: true,
  	autoplaySpeed: 3000,
  	speed: 1500,
  	autoplay:true,
  	arrows: true
  });
  $(".carousel-products").slick({
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	autoplaySpeed: 3000,
  	speed: 1000,
  	autoplay:true,
  	arrows: true,
  	responsive: [
  	{
  		breakpoint: 992,
  		settings: {
  			slidesToShow: 2,
  			slidesToScroll: 1,
  		}
  	},
  	{
  		breakpoint: 600,
  		settings: {
  			slidesToShow: 1,
  			slidesToScroll: 1,
  		}
  	},
  	]
  });
  $(".partners-carousel").slick({
  	slidesToShow: 4,  
  	autoplaySpeed: 2000,
  	arrows: false,
  	dots:true,
  	responsive: [
  	{
  		breakpoint: 1200,
  		settings: {
  			slidesToShow: 3,
  			slidesToScroll: 1,
  		}
  	},
  	{
  		breakpoint: 600,
  		settings: {
  			slidesToShow: 2,
  			slidesToScroll: 1,
  		}
  	},
  	{
  		breakpoint: 400,
  		settings: {
  			slidesToShow: 1,
  			slidesToScroll: 1,
  		}
  	},
  	]
  });
  $('.searchcontainer').click(function(){
  	$('.searchcontainer').toggleClass('open')
  	$('.search').toggleClass('active')
  });
  $(".bommon").click(function(e) {
    e.preventDefault();
    $(".contact-item-form").fadeIn();
    $(".contact-item-form").removeClass('active');
  });
  $(".contact-item-form .close").click(function() {
    $(this).parent().fadeOut();
    $(this).parent().removeClass('active');
  });
  AOS.init();
  
  let $btn = $('#topcontrol .btn-special');
  $btn.on('click', function(){
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
  $(window).on('scroll', function(){
    if(scrollY > 800){
      $btn.fadeIn();
    }else{
      $btn.fadeOut();
    }
  })