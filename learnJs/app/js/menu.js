(function() {
    'use strict';
}());


(function() {


    let subMenu = document.querySelectorAll('.sub-menu');
    let dropDown = document.querySelectorAll('.dropdown');
    ///remove all no-js classes
    dropDown.forEach((el) => {
        el.classList.remove("no-js");
    });

    ///wright actual height to element
    subMenu.forEach((el) => {
        el.style.display = "block";
        el.setAttribute('height', el.clientHeight);
        el.style.height = "0px";
        el.style.overflow = "hidden";
    });

    ///handlers
    dropDown.forEach((el) => {
        el.querySelector('a').addEventListener('mouseover', (function(event) {
            changeHeight(event, 5);
        }));
    });
    dropDown.forEach((el) => {
        el.addEventListener('mouseleave', (function(event) {
            changeHeight(event, -5);
        }));
    });

    ///main function
    function changeHeight(event, step) {
        let target;

        if (event.target.parentNode.classList.contains('dropdown')) {
            target = event.target.parentNode;
        } else if (event.target.classList.contains('dropdown')) {
            target = event.target;
        } else {
            return;
        }

        let el = target.querySelector('.sub-menu');
        let height;
        let currentHeight;
        let intervalId;
        let timeDelay = 7;

        if (step > 0) {
            height = +el.getAttribute('height');
            currentHeight = 0;
            intervalId = setInterval(function() {
                addStep();
                if (currentHeight >= height) {
                    el.style.height = height + 'px';
                    el.style.overflow = "visible";
                    clearInterval(intervalId);
                }
            }, timeDelay);
        } else if (step < 0) {
            el.style.overflow = "hidden";
            currentHeight = +el.getAttribute('height');
            intervalId = setInterval(function() {
                addStep();
                if (currentHeight <= 0) {
                    el.style.height = '0px';
                    clearInterval(intervalId);
                }
            }, timeDelay);
        }

        function addStep() {
            currentHeight += step;
            el.style.height = currentHeight + 'px';
        }
    }


}());
