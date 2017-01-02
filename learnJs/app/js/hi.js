'use strict';





function f(x) {
    alert(x);
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд

function delay(func, delay) {
    return setTimeout(func, delay);

}









//

// var btn = document.getElementsByTagName('button')[0];
// var btn2 = document.getElementsByTagName('button')[1];
// btn.addEventListener('click', timer);
// btn2.addEventListener('click', function() {
//     console.log(timerId);
// });
//
// var i = 1;
//
// function timer() {
//     var timerId = setTimeout(function() {
//             console.log('timerId = ' + timerId);
//             if (i > 20) {
//                 clearInterval(timerId);
//                 console.log('cleared last =' + timerId);
//                 return;
//             }
//             console.log(i++);
//             clearInterval(timerId);
//             console.log('cleared =' + timerId);
//             timer();
//         },
//         100);
// }
//
//
//
//
//


// slider begin
//
// var btnLeft = document.getElementsByClassName('slider__control_left')[0];
// var btnRight = document.getElementsByClassName('slider__control_right')[0];
//
// btnLeft.addEventListener('click', handler);
// btnRight.addEventListener('click', handler);
//
//
// var counter = 0;
//
// function handler() {
//     // console.log(btnLeft);
//     var sliderBody = document.getElementsByClassName('slider__body')[0];
//
//     function handlerForward() {
//         if (counter === 0) {
//             sliderBody.style.left = "-390px";
//             ++counter;
//         } else if (counter === 1) {
//             sliderBody.style.left = "-780px";
//             ++counter;
//         }
//         console.log(counter);
//     }
//
//     function handlerBack() {
//         if (counter === 1) {
//             sliderBody.style.left = "0";
//             --counter;
//         } else if (counter === 2) {
//             sliderBody.style.left = "-390px";
//             --counter;
//         }
//         console.log(counter);
//     }
//
//
//     if (this == btnLeft) {
//         return handlerForward();
//     } else if (this == btnRight) {
//         return handlerBack();
//     }
// }

//slider end

// handler();
