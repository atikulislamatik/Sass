(function($) {
    // preloader
    $(window).load(function() {
        $("#loading").fadeOut(1200);
    }
    ) // 
    $(document).on("scroll", function() {
        if ($(document).scrollTop() > 200) {
            $("header").addClass("black");
        }
        else {
            $("header").removeClass("black");
        }
    }
    );
    // wow js
    new WOW( {
        offset: 100, mobile: true
    }
    ).init();

  
    // video popup
    $('.video-pop').magnificPopup( {
        type: 'iframe'
    }
    );
    // scroll top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scroll-top').fadeIn();
        }
        else {
            $('.scroll-top').fadeOut();
        }
    }
    );
    $('.scroll-top').click(function() {
        $('html, body').animate( {
            scrollTop: 0
        }
        , 800);
        return false;
    }
    );

        $(".slider").owlCarousel({
            items:1,
            loop: true,
            autoplay:true
        });
    // //slicknav js
    $(document).ready(function() {
        $('#slick_nav_menu').slicknav( {
            'label': '', brand: ' <a href="#"><img src="assets/images/logo.png" alt=""></a>'
        }
        );
    }
    );

        // Logo slider JS
        $('.price-slider').owlCarousel({
            loop:true,
            margin:30,
            autoplay: true,
            dots:false,
            autoplayHoverPause: true,
                responsive:{
                    0:{
                        items:4
                    },
                    600:{
                        items:5
                    },
                    1000:{
                        items:5
                    }
                }
        });



          $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            fade: true,
            asNavFor: '.slider-nav'
          });
          $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 2,
            asNavFor: '.slider-for',
            dots:false,
            centerMode: true,
            arrows: true,
            focusOnSelect: true,  responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ],
            navText: [
                "<i class='icofont-rounded-left'></i>",
                "<i class='icofont-rounded-right'></i>"
            ]
          });


    // counter js
    jQuery(document).ready(function($) {
        $('.counter').counterUp( {
            delay: 10, time: 1500
        }
        );
    }
    );
}

(jQuery));