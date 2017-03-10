$(function() {
    let $jcarousel = $('.slider');

    $jcarousel.jcarousel({
        // Core configuration goes here
    })
    // .jcarouselAutoscroll({
    //     interval: 1500,
    //     target: '+=1',
    //     autostart: true
    // })
    ;


    $('.slider__control_prev')
        // .on('jcarouselcontrol:active', function() {
        //     $(this).removeClass('inactive');
        // })
        // .on('jcarouselcontrol:inactive', function() {
        //     $(this).addClass('inactive');
        // })
        .jcarouselControl({
            target: '-=1'
        });

    $('.slider__control_next')
        // .on('jcarouselcontrol:active', function() {
        //     $(this).removeClass('inactive');
        // })
        // .on('jcarouselcontrol:inactive', function() {
        //     $(this).addClass('inactive');
        // })
        // .on('click', function(e) {
        //     e.preventDefault();
        // })
        .jcarouselControl({
            target: '+=1'
        });
});





//////////////masonry
//don't forget to delete right margins if using Masonry
let grid__item = document.querySelectorAll('.grid__item');
grid__item.forEach(el => el.style.marginRight = '0');

let msnry = new Masonry('.grid', {
    // columnWidth: 300,
    gutter: '.grid__gutter-sizer',
    // gutter: 20,
    itemSelector: '.grid__item',
    percentPosition: true
});


//lets load images
(function() {
    const form = document.querySelector('.search__form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const queryWord = e.target.querySelector('.search__input-field').value;
        const query = `http://api.pixplorer.co.uk/image?word=${queryWord}&amount=7`;
        updateImages(query);
    });
    //initialization
    updateImages();

    function updateImages(query = 'http://api.pixplorer.co.uk/image?amount=7') {
        fetch(query)
            .then(response => response.json())
            .then(data => {
                    let styles = document.styleSheets;
                    let firstSheet = styles[0];
                    let rulesNum;
                    data.images.forEach((image, index) => {
                        let rule = `.grid__item_${index+1} {background-image: url('${image.imageurl}');}`;
                        rulesNum = firstSheet.rules.length;
                        firstSheet.insertRule(rule, rulesNum);
                    });
                }
            );
    }
})();
