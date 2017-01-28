'use strict';

// 
var head = {
    glasses: 1
};

var table = {
    pen: 3
};

var bed = {
    sheet: 1,
    pillow: 2
};

var pockets = {
    money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;



// Задание состоит из двух частей:
//
// Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets -> bed -> table -> head.
//
// То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.
//
// После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses? Попробуйте протестировать.









//
// function add(a, b) {
//     return a + b;
//
// }
// console.log(add(4));
//
//
//
//




// var o = {
//     message: (function() {
//         var who = 'me',
//             what = 'call';
//         return console.log(what + ' ' + who);
//     }())
// };
//
// o.message;
// o.getMsg();

// пример использования usage o.getMsg(); // “call me” o.message;









//
// var leader = {
//     name: "Василий Иванович"
// };
//
// var soldier = {
//     name: "Петька"
// };
//
// // эти объекты ссылаются друг на друга!
// leader.soldier = soldier;
// soldier.leader = leader;
//
// var team = [leader, soldier];
//
//
// var teamStr = JSON.stringify(team, function(key, value) {
//     return value.name;
//
// });
//
// console.log(teamStr);
//
//







//
// var leader = {
//     name: "Василий Иванович",
//     age: 35
// };
//
// var leaderToString = JSON.stringify(leader);
//
// console.log(leaderToString);
//
// var leaderObjAgain = JSON.parse(leaderToString);
//
// console.log(leaderObjAgain);









// var person = {
//     something: "some string",
//     something2: "some string 2",
//     method: function() {
//         return this.something;
//     }
// };
//
//
//
// console.log(person.method()); //вызов
// person.method = function() {
//     return this.something2;
// }; // модификация
// console.log(person.method()); //вызов

//
// var Person = function() {
//     function _method() {
//         var something = "some string";
//         return something;
//     }
//     return {
//         method: _method
//     };
// };
//
// var person = new Person;
// person._method;
// console.log(person._method);
// person.method;
//
//
//
//
// var person = (function() {
//     var something = name;
//     var something2 = "some string 2";
//     var newName;
//
//     function _method(name) {
//         return name;
//     }
//
//     function _method2() {
//         return newName;
//     }
//
//     function _setName(name) {
//         newName = name;
//     }
//     return {
//         method: _method,
//         method2: _method2,
//         setName: _setName,
//     };
// }());
//
//
// person.setName("kolia");
// console.log(person.method2());
//
// var vasia = person;
//
// console.log(vasia.method2());
//
//

//
// console.log(person.method("i am usual person"));
//
// console.log(vasia.method("i am vasia"));
//







//
//
//
//
//
// function f(x) {
//     alert(x);
// }
//
// var f1000 = delay(f, 1000);
// var f1500 = delay(f, 1500);
//
// f1000("тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
//
// function delay(func, delay) {
//     return setTimeout(func, delay);
//
// }
//
//







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
