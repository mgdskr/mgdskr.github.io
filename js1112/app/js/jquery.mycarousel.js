(function($) {


    $.fn.mycarousel = function() {
        'use strict';
        
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
            slide();

        });

        this.find('.carousel__control_next').on('click', function() {
            console.log("!");
            //карусель установлена в конец
            if (currentLeft == -maxWidth) {
                return;
            }
            currentLeft -= carouselWidth;
            slide();

        });

        function slide() {
            $carouselBody.animate({
                "left": currentLeft + 'px'
            });
        }

        return this;


    }

})(jQuery);
