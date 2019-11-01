$(document).ready(function() {
  var animation = anime({
  		targets: '.box',
  		translateX: 200,
      easing: 'linear',
      autoplay: false
		});
  
	$(window).scroll(function() {
  	var windowBottom = $(this).scrollTop() + $(this).height();
   	var elementTop = $('.site').offset().top;
    var percentage = (windowBottom - elementTop) / $('.site').height() * 100;

    if (percentage >= 100) {
    	$('.percent').text('100%');
    } else if (windowBottom >= elementTop) {
    	$('.percent').text(`${Math.round(percentage)}%`);
      animation.seek((percentage / 100) * animation.duration);
    } else {
      $('.percent').text('0%');
    }
  });
	
});