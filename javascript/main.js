/**
 * Created by web on 3/25/16.
 */

jQuery(document).ready(function($) {
    /* Init variables */

    var body = $('body');

    /* Prevent nav flash */

    body.addClass('preload');
    $(window).load(function() {
        $("body").removeClass("preload");
    });

    /* Initialize ZURB Foundation */

    $(document).foundation();

    /* Front page news ticker */

    $('.ticker').unslider({
        nav: false,
        autoplay: true,
        delay: 7000,
        animation: 'fade',
        animateHeight: true,
        arrows: {
            prev: '<a class="unslider-arrow prev"><span class="fa fa-chevron-left" aria-hidden="true"></span></a>',
            next: '<a class="unslider-arrow next"><span class="fa fa-chevron-right" aria-hidden="true"></span></a>'
        }
    });

    /* Mobile nav jump */

    $(".menu-jump").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#nav").offset().top
        }, 500);
    });

    /* Docking Nav */

    function getUndockedNavPosition(nav) {
        body.addClass('top-nav');
        return nav.offset().top;
    }

    var dockNavMaybe = function(nav, undockedNavPosition){
        if ($(window).scrollTop() > undockedNavPosition) {
            nav.addClass('docked');
        } else {
            nav.removeClass('docked');
        }
    };

    var nav = $('#nav');

    if (nav.length) {
        var undockedNavPosition = getUndockedNavPosition(nav);

        dockNavMaybe(nav, undockedNavPosition);

        $(window).on('scroll mousewheel', function() {
            dockNavMaybe(nav, undockedNavPosition);
        });
    }

    /* Nav Breakpoint */

    var calculateWidthNeeded = function() {
        body.addClass('top-nav');

        var needed = $('#nav').find('.section-switcher').width();
        $('#nav > ul > li').each(function() {
            needed += $(this).outerWidth(true);
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

    setMobileClass(needed);

    $(window).resize(function() {
        setMobileClass(needed);
    });

});