$( document ).ready(function() {

	$('#menu-box').hide();
    
	$('#social').click(function(){
		$('#social-box').slideToggle();
		$('#social').toggleClass('active');
	});

	$('#menu').click(function(){
		$('#menu-box').slideToggle();
		$('#menu').toggleClass('active');
	});

	$('.competition-section button').click(function(){
		$('#comp-overlay').fadeIn();
	});

	$('#backdrop, .close').click(function(){
		$('#comp-overlay').fadeOut();
	});

	$("#carousel-section").owlCarousel({
		items : 2,
		autoPlay : 4000,
		navigation : true,
		pagination : false,
		navigationText : ["<img src='img/assets/arrow-left.png'>", "<img src='img/assets/arrow-right.png'>"],
		itemsDesktop : false,
		itemsDesktopSmall : false,
		itemsTablet : false,
		lazyLoad : true,
		stopOnHover : true
	});
	
// BACK TO TOP BTN ACTIVATES ON SCROLL
// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 500,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	

});