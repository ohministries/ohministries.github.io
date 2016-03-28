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

});