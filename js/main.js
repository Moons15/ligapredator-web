/* =================================
------------------------------------
	Arcade - Architecture
	Version: 1.0
 ------------------------------------ 
 ====================================*/



'use strict';

var window_w = $(window).innerWidth();

$(window).on('load', function() { 
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

	__portfolio(); // call portfolio function

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.nav-menu').slideToggle(400);
		event.preventDefault();
	});



	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	var hero_s = $(".hero-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOutRight',
    	animateIn: 'fadeInLeft',
        navText: ['<i class="fas fa-arrow-circle-left"></i> Anterior', 'Siguiente <i class="fas fa-arrow-circle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        //autoplay: true,
        mouseDrag: false,
        onInitialized: function() {
        	var a = this.items().length;
        	if(a < 10){
            	$("#snh-1").html("<span>01" + " / </span>0" + a);
       		} else{
       			$("#snh-1").html("<span>01" + " / </span>" + a);
       		}
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
        if(a < 10){
        	$("#snh-1").html("<span>0" + ( 1 > b ? b + a : b > a ? b - a : b) + " / </span>0" + a);
    	} else{
    		$("#snh-1").html("<span> "+ (1 > b ? b + a : b > a ? b - a : b) + " / </span>" + a);
    	}
    });



	/*------------------
		Projects Slider
	--------------------*/
	var project = $('#projects-carousel').owlCarousel({
		nav: true,
		loop: true,
		margin:20,
        navText: ['<i class="fas fa-arrow-circle-left"></i> Anterior', 'Siguiente <i class="fas fa-arrow-circle-right"></i>'],
		responsive:{
			0:{
				items:1,
				margin: 0
			},
			600:{
				items:1
			},
			800:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			},
		}
	});
	/* animate filter */
	var owlAnimateFilter = function(even) {
		$(this)
		.addClass('__loading')
		.delay(70 * $(this).parent().index())
		.queue(function() {
			$(this).dequeue().removeClass('__loading')
		});
	}
	/* Projects filter */
	$('.projects-filter-nav li').on('click', function(e) {
		var filter_data = $(this).data('filter');

		/* return if current */
		if($(this).hasClass('btn-active')) return;

		/* active current */
		$(this).addClass('btn-active').siblings().removeClass('btn-active');

		/* Filter */
		project.owlFilter(filter_data, function(_owl) { 
			$(_owl).find('.single-project').each(owlAnimateFilter); 
		});
	});



	/*------------------
		Brands Slider
	--------------------*/
	$('#client-carousel').owlCarousel({
		nav: false,
		loop: true,
		margin:20,
		autoplay: true,
		responsive:{
			0:{
				items:1,
				margin: 0
			},
			600:{
				items:3
			},
			800:{
				items:3
			},
			992:{
				items:3
			},
			1200:{
				items:3
			},
		}
	});



	/*------------------
		Review Slider
	--------------------*/
	var test_s = $("#test-slider");
    test_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        autoplay: true,
        onInitialized: function() {
        	var a = this.items().length;
        	if(a < 10){
            	$("#snh-2").html("<span>01" + "/ </span>0" + a);
       		} else{
       			$("#snh-2").html("<span>01" + "/ </span>" + a);
       		}
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
        if(a < 10){
        	$("#snh-2").html("<span>0" + ( 1 > b ? b + a : b > a ? b - a : b) + "/ </span>0" + a);
    	} else{
    		$("#snh-2").html("<span> "+ (1 > b ? b + a : b > a ? b - a : b) + "/ </span>" + a);
    	}
    });



    /*------------------
		Service Slider
	--------------------*/
	$('.service-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
    });



	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').parent('.panel-header').removeClass('active');
		var $this = $(this).parent('.panel-header');
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});

	/*------------------
		Back to top
	--------------------*/
	$(document).ready(function(){
		$('.back-to-top').hide();

		$(window).scroll(function(){
			if($(this).scrollTop() > 100){
				$('.back-to-top').fadeIn('500');
			}else{
				$('.back-to-top').fadeOut('500');
			}
		});

		$('.back-to-top').click(function(){
			$('body, html').animate({
				scrollTop: 0
		},1000);
	});
});


})(jQuery);

