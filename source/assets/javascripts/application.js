//= require_tree .

$(document).ready(function () {
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
    $('#js-navigation-menu').find('a').click(function () {
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();

        var bodyPadding = $('section').css('margin-top');
        var sectionScrollTopFix = $anchor.top - parseInt(bodyPadding);

        $('body').animate({
            scrollTop: sectionScrollTopFix,
            duration: 500,
            easing: 'easein'
        });
        return false;
    });


    $('#ss-form').submit( function(){
       $(this).hide();
       $('#crayhola-submit-page').show();
       console.log("you submitted!")
    });


});
