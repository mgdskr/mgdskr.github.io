(()=>{
    'use stict';

    $(function() {
        let $jcarousel = $('.slider');

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
                    return `<input type="radio" class="slider__control-item" name="slider" id="slider__control-item_${page}" checked>
                    <label for="slider__control-item_${page}"></label>`;

                }
            });


    });

    ////accordion
    ////one element is always visible like here https://jqueryui.com/accordion/
    let banners = document.querySelector('.banners');

    banners.addEventListener('click', handlerBannerClick);
    function handlerBannerClick(e) {
        if (e.target.className === 'banner__title') {
            banners.querySelector('.banner_active').classList.toggle('banner_active');
            e.target.parentNode.classList.toggle('banner_active');
        }
    }



})();
