 // SLICK
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  focusOnSelect: true
});

// ZOOM
$('.ex1').zoom();

// STYLE GRAB
$('.ex2').zoom({ on:'grab' });

// STYLE CLICK
$('.ex3').zoom({ on:'click' });	

// STYLE TOGGLE
$('.ex4').zoom({ on:'toggle' });



var newHeight = $(window).height() + "px";

$(document).ready(function() {
     // When ready...
    navFix();
});
function navFix(){
    // https://jsfiddle.net/18n16hzz/ EXAMPLE OF BIO TOGGLE
    // fix nav menu height on mobile
    $('.navbar-collapse').bind('shown.bs.collapse', function() {
      $('body').css("overflow","hidden");
      $(".navbar-collapse").css({ maxHeight: newHeight });
    });

    $('.navbar-collapse').bind('hidden.bs.collapse', function() {
      $('body').css("overflow","auto");
    });
    // END fix nav menu height on mobile

}

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

$(window).resize(function(){
        newHeight = $(window).height() + "px";
        $(".navbar-collapse").css({ maxHeight: newHeight });
    });



