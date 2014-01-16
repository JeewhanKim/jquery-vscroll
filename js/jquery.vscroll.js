/*
	jQuery VScroll.js
	Version 0.5
	Author: Jeewhan Kim

	Referenced by jQuery Parallax (Ian Lunn)
	Plugin: jQuery Parallax
	Version 1.1.3
	Author URL: http://www.ianlunn.co.uk/
	Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

	Dual licensed under the MIT and GPL licenses:
	http://www.opensource.org/licenses/mit-license.php
	http://www.gnu.org/licenses/gpl.html
*/

(function($){

	'use strict';

	$.fn.extend({

		VScroll: function(options) {

			var defaults = {
				speed: 0.1
			}
			var obj = $(this);
			var init_top = obj.offset().top;
			var scroll_top = $(window).scrollTop();

			options = $.extend(defaults, options);

			$(window).bind('scroll', updateBgPosition).resize(updateBgPosition);

			function updateBgPosition() {

				obj.css('backgroundPosition', '50% ' + Math.round( (init_top - $(window).scrollTop()) * options.speed ) + 'px');
	
			}

			return obj.each(function(){

				init_top = obj.offset().top;
				scroll_top = $(window).scrollTop();

				updateBgPosition();

			});

		}
	});

})(jQuery);
