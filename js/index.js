$(window).on('load',function(){
	setTimeout(function(){ // allowing 3 secs to fade out loader
	$('.page-loader').fadeOut('slow');
	},3500);
});




var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
