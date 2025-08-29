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

// header
$(document).ready(function () {
    $("#header .main-nav .click-menu").click(function () {
    $("#header .main-nav nav").addClass("show");
    $("#header .main-nav .cancel-menu").addClass("show");
    $("body").css({ position: "fixed", width: "100%" });
    });

    $("#header .main-nav .cancel-menu").click(function () {
    $("#header .main-nav nav").removeClass("show");
    $("#header .main-nav .cancel-menu").removeClass("show");
    $("body").css({ position: "unset", width: "auto" });
    });

    $("#header nav ul li a").click(function () {
    $("#header .main-nav nav").removeClass("show");
    $("#header .main-nav .cancel-menu").removeClass("show");
    $("body").css({ position: "unset", width: "auto" });
    });

     // aos
    AOS.init({
        duration: 1000,
    });

    // sticky header
    if($(window).width () >= 991) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 200) {
                $('#header').addClass('show');
            }
            else {
                $('#header').removeClass('show');
            }
        });
    }
});