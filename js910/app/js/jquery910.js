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
                // return '<a href="#' + page + '">' + '<input type="radio" name="page"/>' + '</a>';
                return '<input type="radio" name="page"/>';

            }
        });
    // $('.jcarousel-pagination')
    //     .on('jcarouselpagination:active', 'a', function() {
    //         $(this).addClass('active');
    //     })
    //     .on('jcarouselpagination:inactive', 'a', function() {
    //         $(this).removeClass('active');
    //     })
    //     .jcarouselPagination({
    //         item: function(page) {
    //             return '<a href="#' + page + '">' + '<input type="radio" name="page"/>' + '</a>';
    //             // return '<input type="radio" name="page"/>;
    //
    //         }
    //     });

    var $radio = $('.jcarousel-pagination input');
    $radio.eq(0).attr('checked', '');

    $radio.click(function() {
        console.log($(this).index());
    });





    var $jcarouselPrev = $('.jcarousel-prev'),
        $jcarouselNext = $('.jcarousel-next'),
        target;


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


    // $jcarouselPrev.click(function functionName() {
    //     console.log($jcarousel.jcarousel({}));
    // });
    //
    // $jcarouselNext.click(function functionName() {
    //     console.log($jcarousel.jcarousel({}));
    // });


});
