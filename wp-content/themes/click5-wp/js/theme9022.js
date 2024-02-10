/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
( function() {
	var isWebkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    isOpera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    isIe     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( isWebkit || isOpera || isIe ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var id = location.hash.substring( 1 ),
				element;

			if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
				return;
			}

			element = document.getElementById( id );

			if ( element ) {
				if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false );
	}
})();


jQuery(function($){
    $(document).ready(function () {
		$(document).on('scroll', function() {
			if(jQuery(document).scrollTop() > 0) {
				$('#header').addClass('sticky');
			} else {
				$('#header').removeClass('sticky');
			}
		});
	
		if($(document).scrollTop() > 0) {
			$('#header').addClass('sticky');
		}

		$("input[type=tel]").mask("(999) 999-9999");
		
        $(".js-video-button").modalVideo({
            youtube:{
                controls:0,
                nocookie: true,
                rel: 0,
                autoplay: 1
            }
		});

		$("#header .navbar ul#main-menu > li.dropdown > span.mobile-dropdown").click(function() {
			$(this).toggleClass("active-child");

			$(this).parent("li").siblings("li").find("span.mobile-dropdown").removeClass("active-child");
			$(this).parent("li").siblings("li").find("ul.dropdown-menu").removeClass("active-child");

			$(this).parent("li").find("ul.dropdown-menu").eq(0).toggleClass("active-child");
		});

		$(".wpcf7-form a.next-step").click(function(e) {
			e.preventDefault();

			var step = $(this).parent().parent().parent().attr("data-step");

			$(".wpcf7-form .step-" + (parseInt(step) + 1)).show().siblings(".wpcf7-form .step").hide();
		});

		$(".wpcf7-form a.prev-step").click(function(e) {
			e.preventDefault();

			var step = $(this).parent().parent().parent().attr("data-step");

			$(".wpcf7-form .step-" + (parseInt(step) - 1)).show().siblings(".wpcf7-form .step").hide();
		});

		$(".gallery .gallery-item a").each(function() {
            $(this).attr("data-lightbox", "gallery-item");
		});

		$("#testimonials .testimonials").slick({
			infinite: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			responsive: [
				{
				  	breakpoint: 991,
				  	settings: {
						slidesToShow: 1
					}
				}
			]
		})
		  .on('setPosition', function (event, slick) {
			slick.$slides.css('height', slick.$slideTrack.height() + 'px');
		});
    });
});