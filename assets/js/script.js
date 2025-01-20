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

    if ($(window).width() <= 1220) {
      $(".header__burger").removeClass("active");
      $(".header__menu").slideUp();
      $('body').removeClass("hidden");
    };
  });
/*=========/smooth scroll=============*/

/*============Range=============*/
 $( "#range_calc-price" ).slider({
      range:'min',
      min: 10000,
      max: 500000,
      step: 5000,
      value: 200000,
      slide: function( event, ui ) {
        $('#calc-price').val(ui.value.toLocaleString('ru-RU', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace(/,/g, ' '));
       }
    });

    $('#calc-price').on('change', function() {
        var newValue = $(this).val().replace(/[^0-9]/g, '');
        if (newValue === '') {
            $(this).val('');
            $("#range_calc-price").slider("value", 10000);
        } else {
            newValue = Math.max(10000, Math.min(500000, newValue));
             newValue = Math.round(newValue / 5000) * 5000;
            $(this).val(newValue.toLocaleString('ru-RU', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace(/,/g, ' '));
            $("#range_calc-price").slider("value", newValue);
        }
    });
    $('#calc-price').on('input', function() {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
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

    $('#calc-period').on('change', function() {
        var newValue = $(this).val().replace(/[^0-9]/g, '');
        if (newValue === '') {
            $(this).val('');
            $("#range_calc-price").slider("value", 10000);
        } else {
            newValue = Math.max(1, Math.min(36, newValue));
            $(this).val(newValue);
            $("#range_calc-period").slider("value", newValue);
        }
    });
    $('#calc-period').on('input', function() {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
/*===========/range=============*/

});