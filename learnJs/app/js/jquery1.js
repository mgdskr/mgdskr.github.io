(function() {
    'use strict';
}());

////////////// TABS///////////////////////

$(document).ready(function() {
    var $tabs__titles = $("<ul></ul>").attr("id", "tabs__titles").addClass("tabs__titles nav nav-tabs"),
        $tabItem__title = $(".tab-item__title"),
        $tabItem__text = $(".tab-item__text");

    // add ul for tab titles
    $("#tabs").prepend($tabs__titles);
    //grouping all titles in one section
    $tabs__titles.html($tabItem__title);

    //wrap each tab title in Bootstrap's li>a
    $tabItem__title.wrap("<li role='presentation' class='tab-item__title'><a></a></li>");

    //remove h5 tag
    $('h5.tab-item__title').replaceWith(function() {
        return this.textContent;
    });


    $tabItem__title = $(".tab-item__title"); //redefine tab titles
    $tabItem__title.first().addClass("active"); //set first tab title as active
    $tabItem__text.not($tabItem__text.first()).hide(); //hide all texts except the first one


    $tabItem__title.click(function() {
        $tabItem__title.removeClass("active"); //remove active class from all tabs
        $(this).addClass("active"); // and set active class to target

        $tabItem__text.hide(); // hide all texts

        var index = $(this).index();
        $tabItem__text.eq(index).show(); //and show related to target

    });
});


//////////////////INPUT TIPS//////////////////////////////
$(document).ready(function() {
    var $inputs = $("input.form-control"),
        $tips = $("span.alert"),
        $btn = $(".btn");

    //hide all tips
    $tips.hide();

    //remove titles
    $inputs.attr("title", "");

    $inputs
        .mouseenter(function() {
            var inputId = "." + $(this).attr("id");
            $(inputId).fadeIn();

            //for some reason $(this).index == 1 for all inputs and following line does not work
            // $tips.eq($(this).index).show();
        })
        .mouseleave(function() {
            $tips.hide();
        });

    $btn.click(function(event) {
        $tips.toggle();
        event.preventDefault();
    });
});
