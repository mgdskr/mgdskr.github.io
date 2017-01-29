(function() {
    'use strict';
}());

///selects

// Calls the selectBoxIt method on your HTML select box
$(function() {

        $("select").selectBoxIt({
            // Uses the Twitter Bootstrap theme for the drop down
            theme: "bootstrap"

        });
    }

);


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
