$(document).ready(function() {
  /*========Header (fixed)==========*/
  let header = $(".header");
  let scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  })

  function checkScroll(scrollOffset) {
    if( scrollOffset >= 1 ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
  /*========/header (fixed)==========*/

  /*==========Menu=============*/
$(".header__burger").on("click", function() {
  $(this).toggleClass("active");
  $(".header__menu").slideToggle();
  $('body').toggleClass("hidden");
});
/*=========/menu==============*/

/*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;
 
    $("html, body").animate ({
      scrollTop: blockOffset - 120
    }, 1000);
  });
/*=========/smooth scroll=============*/

/*============Range=============*/
 $( "#range_calc-price" ).slider({
      range:'min',
      min: 10000,
      max: 500000,
      value: 200000,
      slide: function( event, ui ) {
        $('#calc-price').val(ui.value);
       }
    });

    $( "#range_calc-period" ).slider({
      range:'min',
      min: 1,
      max: 36,
      value: 36,
      slide: function( event, ui ) {
        $('#calc-period').val(ui.value);
       }
    });
/*===========/range=============*/

});