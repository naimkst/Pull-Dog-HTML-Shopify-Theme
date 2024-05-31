(function ($) {

    "use strict";

    /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/
    $('.select').niceSelect();

    // Toggle mobile navigation
    function toggleMobileNavigation() {
        var navbar = $(".navigation-holder");
        var openBtn = $(".mobail-menu .open-btn");
        var xbutton = $(".mobail-menu .navbar-toggler");

        openBtn.on("click", function (e) {
            e.stopImmediatePropagation();
            navbar.toggleClass("slideInn");
            xbutton.toggleClass("x-close");
            return false;
        })
    }

    toggleMobileNavigation();


    // Function for toggle class for small menu
    function toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#navbar > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    toggleClassForSmallNav();


    // Function for small menu
    function smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".navigation-holder");
        var smallNav = $(".navigation-holder > .small-nav");
        var subMenu = smallNav.find(".sub-menu");
        var megamenu = smallNav.find(".mega-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            megamenu.hide();
            menuItemWidthSubMenu.on("click", function (e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                e.preventDefault();
                e.stopImmediatePropagation();
                $this.toggleClass("rotate");
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }

    smallNavFunctionality();

    // Function for toggle class for small menu
    function toggleClassForcatagoryNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".mini-shop-content > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("mini-shop-item");
        } else {
            mainNav.removeClass("mini-shop-item");
        }
    }

    toggleClassForcatagoryNav();

    // Function for catagory menu
    function catagoryNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".header-shop-item");
        var catagoryNav = $(".header-shop-item > .mini-shop-item");
        var menuItemWidthSubMenu = catagoryNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            menuItemWidthSubMenu.on("click", function (e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                e.preventDefault();
                e.stopImmediatePropagation();
                $this.toggleClass("rotate");
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }

    }

    catagoryNavFunctionality();

    $("body").on("click", function () {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function () {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function () {
        $('.open-btn').removeClass('x-close');
    });

    // toggle3
    $('#toggle3').on("click", function () {
        $('#open3').slideToggle();
        $('.caupon-wrap.s3').toggleClass('coupon-3')
    })



    //Setting hero slider
    function heroSlider() {
        if ($(".hero-slide-wrap").length) {
            $(".hero-slide-wrap").slick({
                arrows: false,
                prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" class="slick-next">Next</button>',
                dots: true,
                fade: true,
                cssEase: 'linear',
            });
        }
    }

    //Active heor slider
    heroSlider();


    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function () {

                //active wow
                wow.init();


            });
        }
    }



    /*------------------------------------------
            = Header search toggle
        -------------------------------------------*/
    if ($(".header-search-form-wrapper").length) {
        var searchToggleBtn = $(".search-toggle-btn");
        var searchToggleBtnIcon = $(".search-toggle-btn i");
        var searchContent = $(".header-search-form");
        var body = $("body");

        searchToggleBtn.on("click", function (e) {
            searchContent.toggleClass("header-search-content-toggle");
            searchToggleBtnIcon.toggleClass("fi flaticon-search fi ti-close");
            e.stopPropagation();
        });

        body.on("click", function () {
            searchContent.removeClass("header-search-content-toggle");
        }).find(searchContent).on("click", function (e) {
            e.stopPropagation();
        });
    }

    /*------------------------------------------
        = Header shopping cart toggle
    -------------------------------------------*/
    if ($(".mini-cart").length) {
        var cartToggleBtn = $(".cart-toggle-btn");
        var cartContent = $(".mini-cart-content");
        var cartContent2 = $(".header-right");
        var cartCloseBtn = $(".mini-cart-close");
        var body = $("body");

        cartToggleBtn.on("click", function (e) {
            cartContent.toggleClass("mini-cart-content-toggle");
            cartContent2.toggleClass("active");
            e.stopPropagation();
        });

        cartCloseBtn.on("click", function (e) {
            cartContent.removeClass("mini-cart-content-toggle");
            cartContent2.removeClass("active");
            e.stopPropagation();
        });

        body.on("click", function () {
            cartContent.removeClass("mini-cart-content-toggle");
            cartContent2.removeClass("active");
        }).find(cartContent).on("click", function (e) {
            e.stopPropagation();
        });
    }


    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    });


    /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect: "elastic",
            closeEffect: "elastic",
            wrapCSS: "project-fancybox-title-style"
        });
    }


    /*------------------------------------------
            = POPUP YOUTUBE, VIMEO, GMAPS
    -------------------------------------------*/
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function () {
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title': this.title,
                helpers: {
                    title: { type: 'inside' },
                    media: {}
                },

                beforeShow: function () {
                    $(".fancybox-wrap").addClass("portfolio-fancybox");
                }
            });
            return false
        });
    }




    $(document).ready(function () {
        $('.gallery-popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
            }

        });

    });


    /*-----------------------
       cart-plus-minus-button 
     -------------------------*/
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });


    /*------------------------------------------
        = BACK TO TOP BTN SETTING
    -------------------------------------------*/
    $("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 1000;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    }

    $(".back-to-top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })


    /*------------------------------------------
        = SHOP DETAILS PAGE PRODUCT SLIDER
    -------------------------------------------*/
    if ($(".shop-single-slider").length) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
        });
        $('.slider-nav').slick({
            slidesToShow: 10,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            vertical: true,
            verticalSwiping: true,
            focusOnSelect: true,
            arrows: false,

            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        infinite: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        infinite: true,
                        vertical: false,
                        verticalSwiping: false,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 3,
                        infinite: true,
                        vertical: false,
                        verticalSwiping: false,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 3,
                        vertical: false,
                        verticalSwiping: false,
                    }
                }
            ]

        });
    }


    /*------------------------------------------
   product-active 
    -------------------------------------------*/
    if ($(".product-active").length) {
        $(".product-active").owlCarousel({
            autoplay: true,
            smartSpeed: 2000,
            margin: 24,
            loop: true,
            items: 4,
            autoplayHoverPause: true,
            dots: false,
            arrows: false,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },

                550: {
                    items: 2,
                },

                767: {
                    items: 2,
                },
                992: {
                    items: 3,
                },

                1200: {
                    items: 3,
                },
                1399: {
                    items: 4
                }
            }
        });
    }



    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(window).on('load', function () {

        preloader();

        toggleMobileNavigation();

        smallNavFunctionality();

        toggleClassForcatagoryNav();
    });



    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function () {
        var headerSection = $('.site-header');

        if ($(window).scrollTop() > 300) {
            headerSection.addClass('header-fixed fadeInDown animated');
        } else {
            headerSection.removeClass('header-fixed fadeInDown animated');
        }

        // fixed header remove for register page only
        if ($('.site-header').hasClass('header-for-register')) {
            $('.site-header').removeClass('header-fixed fadeInDown animated');
        }

        toggleBackToTopBtn();

    });


    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function () {
        toggleClassForSmallNav();
        //smallNavFunctionality();
        catagoryNavFunctionality();
        clearTimeout($.data(this, 'resizeTimer'));
        $.data(this, 'resizeTimer', setTimeout(function () {
            smallNavFunctionality();
        }, 200));
    });



})(window.jQuery);