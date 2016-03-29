/**
 * Created by web on 3/25/16.
 */

jQuery(document).ready(function($) {

    $(document).foundation();

    $('.ticker').unslider({
        nav: false,
        autoplay: true,
        delay: 7000,
        animation: 'fade',
        animateHeight: true,
        arrows: {
            prev: '<a class="unslider-arrow prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></a>',
            next: '<a class="unslider-arrow next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></a>'
        }
    });

    $(".menu-jump").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#nav").offset().top
        }, 500);
    });

    /* Nav Breakpoint */

    var body = $('body');

    var calculateWidthNeeded = function() {
        body.addClass('top-nav');

        var needed = 0;
        $('#nav > ul > li').each(function() {
            needed += $(this).width();
        });
        return needed;
    };

    var setMobileClass = function(needed) {
        var have = $('.site-header').width();
        if (have < needed) {
            body.removeClass('top-nav');
        } else {
            body.addClass('top-nav');
        }
    };

    var needed = calculateWidthNeeded();
    console.log(needed);

    setMobileClass(needed);

    $(window).resize(function() {
        setMobileClass(needed);
    });

    /* Docking Nav */

    var nav = $('#nav');

    if (nav.length) {
        var navPosition = nav.offset().top;

        var stickyNav = function(nav, navPosition){
            if ($(window).scrollTop() > navPosition) {
                nav.addClass('docked');
            } else {
                nav.removeClass('docked');
            }
        };

        stickyNav(nav, navPosition);

        $(window).on('scroll mousewheel', function() {
            stickyNav(nav, navPosition);
        });
    }

});