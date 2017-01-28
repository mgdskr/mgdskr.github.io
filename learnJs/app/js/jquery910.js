(function() {
    'use strict';
}());


/////carousel/////////////

$(function() {
    var $jcarousel = $('.jcarousel');
    $jcarousel.jcarousel({
            // Core configuration goes here
        })
        .jcarouselAutoscroll({
            interval: 1500,
            target: '+=1',
            autostart: true
        });


    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'input', function() {
            $(this).addClass('active').attr('checked', '');
        })
        .on('jcarouselpagination:inactive', 'input', function() {
            $(this).removeClass('active').removeAttr('checked');
        })
        .jcarouselPagination({
            item: function(page) {
                return '<input type="radio" name="page"/>';

            }
        });

    var $radio = $('.jcarousel-pagination input');
    $radio.eq(0).attr('checked', '');

    $radio.click(function() {
        console.log($(this).index());
    });



    var $jcarouselPrev = $('.jcarousel-prev'),
        $jcarouselNext = $('.jcarousel-next');


    $jcarouselPrev
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $jcarouselNext
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });
});


///selects

// Calls the selectBoxIt method on your HTML select box
$(function() {

        $("select").selectBoxIt({
            // Uses the Twitter Bootstrap theme for the drop down
            theme: "bootstrap"

        });
    }

);


///////////////dropdown menu animations///////////////////////
///// ES6 rules
$(() => {
    let $dropdown = $('.dropdown');

    $dropdown.removeClass('no-js');

    $dropdown.hover(function() {
        $(this)
            .children('.sub-menu')
            .stop()
            .slideDown('fast');

    }, function() {
        $(this)
            .children('.sub-menu')
            .stop()
            .slideUp('fast');

    });
});

///////////////////checkbox-custom
$(() => {
    $('form.checkboxes-js').removeClass('no-js');

    let $niceCheck = $('.niceCheck input');

    $niceCheck.each(function() {
        if ($(this).attr("checked")) {
            $(this).addClass("checked");
        }
        if ($(this).attr("disabled")) {
            $(this).addClass("disabled");
        }
    }).on('click', function() {
        $(this).toggleClass("checked");

    });
});
