var A = jQuery.noConflict();
jQuery(function(A){
	A(".slider-link-1a, .slider-link-2a, .slider-link-3a, .slider-link-4a, .slider-link-5a, .slider-link-6a, .slider-link-7a").hover(function(){
		A(this).animate({
			marginTop: "-10px"
		}, 250);
	}, function(){
		A(this).animate({
			marginTop: "0px"
		}, 250);
	});
});