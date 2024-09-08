// Initialize matchHeight on all elements with the class 'box'
$(document).ready(function() {
$('.service-block-one .card__content p').matchHeight();
$('.service-block-one .icon-box').matchHeight();
});


$(window).scroll(function() {
if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200);    // Fade in the arrow
} else {
    $('#return-to-top').fadeOut(200);   // Else fade out the arrow
}
});
$('#return-to-top').click(function() {      // When arrow is clicked
$('body,html').animate({
    scrollTop : 0                       // Scroll to top of body
}, 500);
});
