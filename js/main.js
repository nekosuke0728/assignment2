$(document).ready(function() {

     // ------------------------------------------------------------------- pc sticky header

     $('.page-header').each(function () {
          var $window = $(window),
               $header = $(this),
               headerOffsetTop = $header.offset().top;

          $window.on('scroll', function () {
               if ($window.scrollTop() > headerOffsetTop) {
                    $header.addClass('sticky');
               } else {
                    $header.removeClass('sticky');
               }
          });

          $window.trigger('scroll');
          
     });

     // ------------------------------------------------------------------- drawer menu

     $('.drawer').drawer();

     $('a[href^="#"]').on('click', function() {
          $('.drawer').drawer('close');
     });

     // ------------------------------------------------------------------- smooth scroll

     $(function(){
          $('a[href^="#"]').click(function(){
               var speed = 500;
               var href = $(this).attr("href");
               var target = $(href == "#" || href == "" ? 'html' : href);
               var position = target.offset().top;
               $("html, body").animate({scrollTop:position}, speed, "swing");
               return false;
          });
     });  

     // ------------------------------------------------------------------- slick slideshow

     $(function() {
          $('.thumb-item').slick({
               infinite: true,
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
               fade: true,
               asNavFor: '.thumb-item-nav',
          });
          $('.thumb-item-nav').slick({
               infinite: true,
               centerMode: true,
               slidesToShow: 5,
               slidesToScroll: 1,
               asNavFor: '.thumb-item',
               focusOnSelect: true,

               responsive: [{
               breakpoint: 768,
                    // settings: {
                    //      slidesToShow: 3,
                    //      slidesToScroll: 3,
               }
          },{
               breakpoint: 480,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                    }
               }]
          });
     });

     // ------------------------------------------------------------------- page-top return botton

     $(function() {
          var topBtn = $('#page-top');    
          topBtn.hide();

          $(window).scroll(function () {
               if ($(this).scrollTop() > 100) {
                    topBtn.fadeIn();
               } else {
                    topBtn.fadeOut();
               }
          });

          topBtn.click(function () {
               $('body,html').animate({
                    scrollTop: 0
               }, 500);
               return false;
          });
     });

});