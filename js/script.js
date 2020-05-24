(function ($) {
	"use strict";

	$(document).ready(function(){




		 var owl = $('.owl-carousel');
		owl.owlCarousel({
			'items': 5,
		 	'margin': 25, 
		 	'loop': true, 
		 	'autoplay': true, 
		 	 responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:false
		        },
		        600:{
		            items:3,
		            nav:false
		        },
		        1000:{
		            items:5,
		            nav:false,
		            loop:true
		        }
		    }
		});
		// Go to the next item
		$('.customNextBtn').click(function() {
		    owl.trigger('prev.owl.carousel');
		})
		// Go to the previous item
		$('.customPrevBtn').click(function() {
		    // With optional speed parameter
		    // Parameters has to be in square bracket '[]'
		    owl.trigger('next.owl.carousel', [300]);
		})
		
		
		 var shrinkHeader = 200;
		  jQuery(window).scroll(function() {
			var scroll = getCurrentScroll();
			  if ( scroll >= shrinkHeader ) {
				   jQuery('.header-top-fixed').addClass('shrink');
				}
				else {
					jQuery('.header-top-fixed').removeClass('shrink');
				}
		  });
		function getCurrentScroll() {
			return window.pageYOffset || document.documentElement.scrollTop;
			}
		
			
		var theToggle = document.getElementById('toggle');

		// hasClass
		function hasClass(elem, className) {
			return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
		}
		
		// toggleClass
		function toggleClass(elem, className) {
			var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
			if (hasClass(elem, className)) {
				while (newClass.indexOf(" " + className + " ") >= 0 ) {
					newClass = newClass.replace( " " + className + " " , " " );
				}
				elem.className = newClass.replace(/^\s+|\s+$/g, '');
			} else {
				elem.className += ' ' + className;
			}
		}

		theToggle.onclick = function() {
		   toggleClass(this, 'on');
		   return false;
		}
			
	});

}(jQuery));