jQuery(function($){
	/******************************************
	init
	******************************************/
	//slick
	$('.hero').slick({
		autoplay: true,
		//autoplaySpeed: 5000,//df:3000
	});
	
	$('.img-container').waypoint(function(direction){
		var activePoint = $(this.element);
		//scroll down
		if (direction === 'down') {
			activePoint.addClass('active');
		}
	},{offset : '70%'});

	$('.text-container').waypoint(function(direction){
		var activePoint = $(this.element);
		//scroll down
		if (direction === 'down') {
			activePoint.addClass('active');
		}
	},{offset : '70%'});
		
});	