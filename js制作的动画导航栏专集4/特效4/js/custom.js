var A = jQuery.noConflict();
jQuery(function(A){
	A(".slider-link-1, .slider-link-2, .slider-link-3, .slider-link-4, .slider-link-5,.slider-link-6,.slider-link-7").hover(function(){
		A(this).animate({
			marginTop: "8px"
		}, 250);
	}, function(){
		A(this).animate({
			marginTop: "0px"
		}, 250);
	});
});