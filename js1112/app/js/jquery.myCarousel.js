(function($) {


    $.fn.myCarousel = function(options) {
        'use strict';

        // задаем настройки по умолчанию
        let defaults = {
            speed: 400
        };
        
        let config = $.extend({}, defaults, options);

        //ищем карусель боди именно нашей карусели
        let $carouselBody = this.find('.carousel__body');

        //получаем ширину окошка именно нашей карусели
        let carouselWidth;
        this.find('.carousel__visible-part').map(
            function() {
                carouselWidth = this.clientWidth
            }
        );

        //получаем максимальную ширину карусели
        let maxWidth = 780; //130px*6items

        //определяем текущее значение left равное начальному, т.е. 0
        let currentLeft = 0;

        //вешаем обработчики

        this.find('.carousel__control_prev').on('click', function() {
            //карусель установлена на начало
            if (currentLeft === 0) {
                return;
            }
            currentLeft += carouselWidth;
            slide(config.speed);

        });

        this.find('.carousel__control_next').on('click', function() {
            //карусель установлена в конец
            if (currentLeft == -maxWidth) {
                return;
            }
            currentLeft -= carouselWidth;
            slide(config.speed);

        });

        function slide(speed) {
            $carouselBody.animate({
                "left": currentLeft + 'px'
            }, speed);
        }

        return this;


    }

})(jQuery);
