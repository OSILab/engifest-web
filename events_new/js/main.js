jQuery(document).ready(function(){
window.scrollTo(0, 0);	
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});
	$timeline_block.each(function(){
		if($(this).offset().top < $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});
    
	//on scrolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function demo(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}

			if ($(this).offset().top > $(window).scrollTop()+$(window).height()) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('bounce-in').addClass('is-hidden');
			}

	
			if( $(this).offset().top <= $(window).scrollTop()  - 100 ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('bounce-in').addClass('is-hidden');
			}

		});


	});
	setTimeout(demo,1000);
    window.scrollTo(0,20);
});