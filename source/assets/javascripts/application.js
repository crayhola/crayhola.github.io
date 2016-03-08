//= require_tree .

$(document).ready(function () {

    function _scrollTo (node) {
        $(document).off("scroll");
        var $href = $(node).attr('href');
        var $anchor = $($href).offset();

        $('#js-navigation-menu').find('a').removeClass('selected');
        $(this).addClass('selected');

        var bodyPadding = $('section').css('margin-top');
        var sectionScrollTopFix = ($anchor.top - 75) - parseInt(bodyPadding);

        $('body').animate({
            scrollTop: sectionScrollTopFix,
            duration: 500,
            easing: 'easein'
        }, 500, 'swing', function () {
             $(document).on("scroll", onScroll);
        });

        return false;
    }

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('#js-navigation-menu a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#js-navigation-menu ul li a').removeClass("selected");
                currLink.addClass("selected");
            } else {
                currLink.removeClass("selected");
            }
        });
    }

    $(document).on("scroll", onScroll);

    var menuToggle;
    menuToggle = $('#js-navigation-mobile-menu').unbind();
    $('#js-navigation-menu').removeClass('show');
    menuToggle.on('click', function (e) {
        e.preventDefault();
        $('#js-navigation-menu').slideToggle(function () {
            if ($('#js-navigation-menu').is(':hidden')) {
                $('#js-navigation-menu').removeAttr('style');
            }
        });
    });
    $('#join-joc').on('click', function () {
        _scrollTo(this);
    });
    $('#js-navigation-menu').find('a').click(function () {
        _scrollTo(this);
    });

    $('#ss-form').submit(function () {
        $(this).hide();
        $('#crayhola-submit-page').show();
        console.log("you submitted!")
    });
});
