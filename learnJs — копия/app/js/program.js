console.log("HELLO ES6");









//
// var container = document.getElementById("container");
// makeCal(container, 1983, 2);
//
// function makeCal(div, year, month) {
//     var firstDay = new Date(year, month - 1).getDay();
//     var firstDate = new Date(year, month - 1);
//     var lastDate = new Date(year, month, 0).getDate();
//     // var days = Array(firstDay);
//     // console.log(days);
//
//     var weekCal = "";
//     var monthCal = "";
//     for (var cellNum = 0; cellNum < 50; cellNum++) {
//         // if (cellNum < firstDay) {
//         //     var day = "";
//         // } else if (cellNum = firstDay) {
//         //     day = firstDate;
//         // } else {
//         //     // ++day;
//         // };
//         weekCal += makeData(day);
//         if (cellNum % 6 === 0) {
//             monthCal += makeRow(weekCal);
//             weekCal = "";
//         }
//     }
//     console.log(monthCal);
//     // var table = document.createElement("table");
//     container.innerHTML = "<table>" + monthCal + "</table>";
//
//
// }
//
// function makeData(data) {
//     return "<td>" + data + "</td>";
// }
//
// function makeRow(data) {
//     return "<tr>" + data + "</tr>";
// }
//
// var x = new Date();
// console.log(makeData(x));
// console.log(makeRow(makeData(x)));





// var data = {
//     "Рыбы": {
//         "Щука": {},
//         "Форель": {}
//     },
//     "Деревья": {
//         "Хвойные": {
//             "Лиственница": {},
//             "Ель": {},
//             "Cосна": {},
//             "Кедр": {}
//         },
//         "Цветковые": {
//             "Берёза": {},
//             "Тополь": {}
//         }
//     }
// };
//
// // function tree(data) {
// //     if (Object.keys(data).length === 0) return;
// //     var ul = document.createElement("ul");
// //     for (var key in data) {
// //         var li = document.createElement("li");
// //         li.innerHTML = key;
// //
// //         var childrenUl = tree(data[key]);
// //         if (childrenUl) li.appendChild(childrenUl);
// //         ul.appendChild(li);
// //
// //     }
//
//
//
//
//
//
//     console.log(`ul = ${ul+1}`);
// //     return ul;
// // }
//
// function tree(data) {
//     var li = "";
//     for (var key in data) {
//         // if (Object.keys(data[key]).length) {
//         //     var counter = " [" + Object.keys(data[key]).length + "]";
//         //     li += "<li>" + key + counter + tree(data[key]) + "</li>";
//         // } else {
//         //     li += "<li>" + key + tree(data[key]) + "</li>";
//         // }
//         li += "<li>" + key + tree(data[key]) + "</li>";
//     }
//     if (li) {
//         var ul = "<ul>" + li + "</ul>";
//     }
//     return ul || "";
// }
//
// function createTree(container, data) {
//     container.innerHTML = tree(data);
//
// }
//
//
// var container = document.getElementById("container");
// // container.appendChild(tree(data));
// createTree(container, data);
//
// function addNumbers() {
//     var ul = document.getElementsByTagName("ul");
//     for (var i = 0; i < ul.length; i++) {
//         var num = ul[i].getElementsByTagName("li").length;
//         ul[i].firstChild.data += " [" + num + "]";
//     }
// }
//
//
// addNumbers();
//

// console.log(ul.childNodes.length);
// console.log(ul.childNodes[0]);
// console.log(ul.childNodes[1]);
// console.log(ul.childNode.length);
// for (var i = 0; i < ul.children.length; i++) {
//
// }


// console.log(tree(data));







// (function createList() {
// var body = document.body;
// var ul = document.createElement("ul");
// ul.innerHTML = "Список";
// body.insertBefore(ul, body.children[0]);
// var userInput = prompt("введите название элемента списка", "");
// while (userInput) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(userInput));
//     ul.appendChild(li);
//     userInput = prompt("введите название элемента списка", "");
// }
// }());





// function removeChildren(elem) {
//     elem.innerHTML = "";
//
//
//     // while (elem.lastChild) {
//     //   elem.removeChild(elem.lastChild);
//     // }
//     // var childrens = elem.children;
//     // console.log(childrens);
//     // for (var i = 0; i < childrens.length; i++) {
//     //     console.log(childrens[i]);
//     //     elem.removeChild(childrens[i]);
//     // }
// }
//
// removeChildren(table); // очищает таблицу
// removeChildren(ol);
//
//







// апишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.

//
// var elem = document.createElement("div");
// elem.innerHTML = "<b>Новый элемент</b>";
//
// function insertAfter(elem, refElem) {
//     refElem.parentElement.insertBefore(elem, refElem.nextElementSibling);
// }
//
// var body = document.body;
//
// // вставить elem после первого элемента
// insertAfter(elem, body.firstChild); // <--- должно работать
//
// вставить elem за последним элементом
// insertAfter(elem, body.lastChild); // <--- должно работать









// var elem = document.body.children[3];
// console.log(elem);
//
// (function() {
//     if (!Element.prototype.remove) {
//
//         Element.prototype.remove = function remove() {
//             if (this.parentNode) {
//                 this.parentNode.removeChild(this);
//             }
//         };
//     }
//
// }());
// elem.remove();









//
// var elem = document.body;
//
// var text = "<i>вставка!</i>"
//
// elem.appendChild(document.createTextNode(text));

// elem.innerHTML = text;




//
// var link = document.getElementsByTagName("a");
// console.log(link);
//
// for (var i = 0; i < link.length; i++) {
//     console.log(link[i].href);
//     console.log(!~"".indexOf.call(link[i].href, "http://"));
//     if (!~"".indexOf.call(link[i].href, "http://") ||
//   ~"".indexOf.call(link[i].href, "http://internal") ||
//   ~"".indexOf.call(link[i].href, "http://localhost")) {
//         link[i].classList.add("external");
//     }
// }

//
//
// var div = document.querySelector("div");
// console.log(div);
// var widgetName = div.getAttribute("data-widget-name");
// console.log(div.dataset.widgetName);
// console.log(widgetName);









//
// textContent
// innerText
//     (function() {
//     if (!Element.prototype.textContent) {
//         Element.prototype.textContent = this.innerText;
//     }
//
// })();
//
// (function() {
//
//   // проверяем поддержку
//   if (document.documentElement.textContent === undefined) {
//
//     // определяем свойство
//     Object.defineProperty(HTMLElement.prototype, "textContent", {
//       get: function() {
//         return this.innerText;
//       },
//       set: function(value) {
//         this.innerText = value;
//       }
//     });
//   }
//
// })();
//
//
//

//
// (function() {
//     if (!Element.prototype.closest) {
//         Element.prototype.closest = function(css) {
//             var node = this;
//             while (node) {
//                 if (node.matches(css)) return node;
//                 else node = node.parentElement;
//             }
//             return null;
//         }
//
//     }
//
// })();
//





//
//
// var body = document.documentElement;
// console.log(body);
// console.log(body.closest("html"));
//
//
// if (!body.closest("html")) {
//     Object.defineProperty(Object.prototype, "closest", {
//         get: function(tag) {
//             var el = this;
//             while (this.tagName == tag) {
//                 el = el.parentElement;
//                 if (this.parentElement.nodeName == "#document");
//                 return null;
//             }
//             return el;
//         }
//     });
// }

// console.log(html.matches("html"));
//
// Метод elem.closest(css) для поиска ближайшего родителя, удовлетворяющего селектору css, не поддерживается некоторыми браузерами, например IE11-.
//
// Создайте для него полифилл.


//
// var html = document.documentElement;
//
// if (!html.matches("html")) {
//     Object.defineProperty(Element.prototype, "matches", {
//         get: function("tag") {
//             if (html.matchesSelector("html")) {
//                 return this.tagName.matchesSelector("tag");
//             } else if (html.webkitMatchesSelector("html")) {
//                 return this.tagName.webkitMatchesSelector("tag");
//             } else if (html.mozMatchesSelector("html")) {
//                 return this.tagName.mozMatchesSelector("tag");
//             } else if (html.msMatchesSelector("html")) {
//                 return this.tagName.msMatchesSelector("tag");
//             } else {
//                 return false;
//             }
//
//         }
//     })
// }



// Метод elem.matches(css) в некоторых старых браузерах поддерживается под старым именем matchesSelector или с префиксами, то есть: webkitMatchesSelector (старый Chrome, Safari), mozMatchesSelector (старый Firefox) или Element.prototype.msMatchesSelector (старый IE).
//
// Создайте полифилл, который гарантирует стандартный синтаксис elem.matches(css) для всех браузеров.
//








//
// var childNodes = document.childNodes;
//
// for (var i = 0; i < childNodes.length; i++) {
//
//     // отфильтровать не-элементы
//     if (childNodes[i].nodeType != 3) continue;
//
//     console.log(childNodes[i]);
//
// }


//
// var x = {};
// x.numb = 5;
// x.foo = function() {
//     return this;
//
// };
// document.getElementsByTagName("ul")[0].children[1]









//
// for (var i = 0; i < 10000; i++) {
//     var div = document.createElement("div");
//     document.body.appendChild(div);
// }
//
// function bench(f, times) {
//     var d = new Date();
//     for (var i = 0; i < times; i++) f();
//     return new Date() - d;
// }
//
// function runGetList() {
//     var results = document.getElementsByTagName("p");
//     var len = results.length;
//     for (var i = 0; i < len; i++) {
//         var elem = results[i];
//     }
// }
//
// function runQueryList() {
//     var results = document.querySelectorAll("p");
//     var len = results.length;
//     for (var i = 0; i < len; i++) {
//         var elem = results[i];
//     }
// }
// console.log(bench(runGetList, 100000));
// console.log(bench(runQueryList, 100000));
//


//
// var menu = document.querySelector("ul");
//
// // console.log(menu.firstChild);
//
//
//
//
//
//
// var li = menu.querySelectorAll("li");
// for (var i = 0; i < li.length; i++) {
//     console.log(li[i].firstChild.data);
// }
// var liQty = menu.querySelectorAll("li").length;
// console.log(liQty);
//
//



//
// var table = document.body.children[2].children[0];
// // console.log(table.children);
// var rows = table.rows;
//
// console.log(rows);
//
// for (var i = 0; i < rows.length; i++) {
//         var row = rows[i];
//         row.cells[i].style.backgroundColor = "red";
//
// }



// var html = document.documentElement.children[1].childNodes;
// // console.log(html.length);
// console.log(html);
// var i = 1;
// for (var key in html) {
//     console.log(html[key]);
//     // i++;
// }
// var head = document.body.children[3].lastElementChild;
// console.log(head);
//

// if ([].length.apply(document.body)) {
//     console.log("no elements!");
// }


//
// to do {
//   проверить работу незакрытых ли элементов в браузере - что он им дорисовывает и откуда берутся пробелы между инлайн-блоками ли
// } while ();
//

//
// function f(x) {
//     return Math.random() * x; // random для удобства тестирования
// }
//
// function makeCaching(f) {
//     var cache = {};
//     return function(x) {
//         if (x in cache) {
//           return cache[x];
//         }
//         cache[x] = f.apply(this, arguments);
//         return cache[x];
//     }
// }
//
// f = makeCaching(f);
//
// var a, b;
//
// a = f(1);
// b = f(1);
// alert(a == b); // true (значение закешировано)

// b = f(2);
// alert(a == b); // false, другой аргумент => другое значение









//
// function ask(question, answer, ok, fail) {
//     var result = prompt(question, "");
//     if (result.toLowerCase() == answer.toLowerCase()) ok();
//     else fail();
// }
//
// var user = {
//     login: "Василий",
//     password: "12345",
//
//     // метод для вызова из ask
//     loginDone: function(result) {
//         alert(this.login + (result ? " вошёл в сайт" : " ошибка входа"));
//     },
//
//     checkPassword: function() {
//         // var self = this;
//         ask("Ваш пароль?", this.password,
//             this.loginDone.bind(this, true),
//             this.loginDone.bind(this, false)
//         );
//     }
// };
//
// var vasya = user;
// user = null;
// vasya.checkPassword();






// Применить Math.max к аргументам 2, -2, 3

// Применить Math.min к аргументам 2, -2, 3
// console.log(applyAll(Math.min, 2, -2, 3)); // -2
// console.log(applyAll(Math.max, 2, -2, 3)); // 3
//
// function sum() { // суммирует аргументы: sum(1,2,3) = 6
//     return [].reduce.call(arguments, function(a, b) {
//         return a + b;
//     });
// }
//
// function mul() { // перемножает аргументы: mul(2,3,4) = 24
//     return [].reduce.call(arguments, function(a, b) {
//         return a * b;
//     });
// }
//
// // console.log(applyAll(sum, 1, 2, 3)); // -> sum(1, 2, 3) = 6
// // console.log(applyAll(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24
//
//
// function applyAll(func) {
//     var args = [].slice.call(arguments, 1);
//     return func.apply(null, args);
//
//
// }








//
// function sum(arr) {
//     return arr.reduce(function(a, b) {
//         return a + b;
//     });
// }
//
// console.log(sum([1, 2, 3])); // 6 (=1+2+3)
// // Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:
//
// function sumArgs() {
//     var reduce = [].reduce.call(arguments, function(a, b) {
//         return a + b;
//     });
//     // return arguments.reduce(function(a, b) {
//     //     return a + b;
//     // });
//     return reduce;
// }
//
// console.log(sumArgs(1, 2, 3)); // 6,

//
// function Article() {
//     this.created = new Date;
//     Article.count++;
//     Article.last = this.created;
//     Article.showStats = function() {
//             console.log("кол-во вызовов " + this.count);
//             console.log("время создания " + this.last);
//         } // ... ваш код ...
// }
// Article.count = 0;
//
// new Article();
// new Article();
//
// Article.showStats(); // Всего: 2, Последняя: (дата)
//
// new Article();
//
// Article.showStats(); // Всего: 3, Последняя: (дата)
//


//
// function User(fullName) {
//     this.fullName = fullName;
//     Object.defineProperties(this, {
//         firstName: {
//             get: function() {
//                 return this.fullName.split(" ")[0];
//
//             },
//             set: function(newFirstName) {
//                 this.fullName = newFirstName + " " + this.fullName.split(" ")[1];
//             }
//
//
//         },
//         lastName: {
//             get: function() {
//                 return this.fullName.split(" ")[1];
//
//             },
//             set: function(newLastName) {
//               this.fullName = this.fullName.split(" ")[0] + " " + newLastName;
//
//             }
//
//         }
//     });
// }
//
//
// var vasya = new User("Василий Попкин");
// Имя и фамилия всегда разделяются пробелом.
//
// Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:


// чтение firstName/lastName
// vasya.firstName = "Блеать";
// console.log(vasya.firstName); // Василий
// console.log(vasya.lastName); // Попкин
//
// // запись в lastName
// vasya.lastName = "Сидоров";
//
// console.log(vasya.fullName); // Василий Сидоров









//
// function Calculator() {
//     var addTag = {
//         "-": function(a, b) {
//             return a - b;
//         },
//         "+": function(a, b) {
//             return a + b;
//         }
//
//     }
//     this.calculate = function(str) {
//         var split = str.split(" "),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];
//         if (!addTag[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }
//         return addTag[op](+a, +b);
//     }
//     this.addMethod = function(operator, func) {
//         addTag[operator] = func;
//         //
//     };
//
// }
//
// var calc = new Calculator();
//
// console.log(calc.calculate("3 + 7")); // 10
//
//
// var powerCalc = new Calculator;
// powerCalc.addMethod("*", function(a, b) {
//     return a * b;
// });
// powerCalc.addMethod("/", function(a, b) {
//     return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//     return Math.pow(a, b);
// });
//
// var result = powerCalc.calculate("2 ** 3");
// console.log(result); // 8
// var div = powerCalc.calculate("20 / 4");
// console.log(div);







//
// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function() {
//         this.value += +prompt("Value? ", 0);
//     };
//
//
// }
//
//
//
//
// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// console.log(accumulator.value); // выведет текущее значение









//
// function Calculator() {
//     this.read = function() {
//         this.a = +prompt("a? ", 0);
//         this.b = +prompt("b? ", 0);
//
//     };
//
//     this.sum = function() {
//         return this.a + this.b;
//
//     };
//
//     this.mul = function() {
//         return this.a * this.b;
//
//     }
//
// }
//
//
// var calculator = new Calculator();
// calculator.read();
//
// console.log("Сумма=" + calculator.sum());
// console.log("Произведение=" + calculator.mul());
//
//
//






//
// function sum(a) {
//     var currentSum = a;
//
//     function f(x) {
//         currentSum += x;
//         return f;
//     };
//     f.toString = function() {
//         return currentSum;
//     };
//     return f;
//
//
// }
//
//
//
// console.log(sum(1)(2) == 3); // 1 + 2
// console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
// console.log(sum(5)(-1)(2) == 6);
// console.log(sum(6)(-1)(-2)(-3) == 0);
// console.log(sum(0)(1)(2)(3)(4)(5) == 15);









// var x = {}[0];
// var y  = {}+{};
// console.log(x);
// console.log(y);

//
// var obj = {
//   toStrings: function() {
//     return 123;
//   }
// };
//
// alert( obj ); // 123
//

//
// var ladder = {
//     step: 0,
//     up: function() { // вверх по лестнице
//         this.step++;
//         return this;
//
//     },
//     down: function() { // вниз по лестнице
//         this.step--;
//         return this;
//     },
//     showStep: function() { // вывести текущую ступеньку
//         alert(this.step);
//         return this;
//
//     }
// };
//
//
//
// ladder.up().up().down().up().down().down().showStep(); // 1









//
// var calculator = {
//     read: function() {
//         this.a = +prompt("Введите первое значение: ", 0);
//         this.b = +prompt("Введите второе значение: ", 0);
//     },
//     sum: function() {
//         return this.a + this.b;
//
//     },
//     mul: function() {
//         return this.a * this.b;
//
//     }
//
//
//
//     // show: function() {
//     //     console.log(this.input);
//     //
//     // }
// };
//
// calculator.read();
// // calculator.show();
// console.log(calculator.sum());
// console.log(calculator.mul());
//
// function makeArmy() {
//
//     var shooters = [];
//
//     for (var i = 0; i < 10; i++)(function(i) {
//
//         var shooter = function() {
//             console.log(i);
//         }
//         shooters.push(shooter);
//     })(i);
//     return shooters;
// }
//
//
//
// var army = makeArmy();
//
// army[0](); // стрелок выводит 10, а должен 0
// army[5]();
//








//
// var arr = [1, 2, 3, 4, 5, 6, 7];
// //
// // console.log(filter(arr, function(a) {
// //     return a % 2 === 0;
// // })); // 2,4,6
//
// console.log(filter(arr, inBetween(3, 6))); // 3,4,5,6
//
// console.log(filter(arr, inArray([1, 2, 10]))); // 1,2
//
//
// function filter(arr, filterMethod) {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//         var val = arr[i];
//         if (filterMethod(val)) {
//             result.push(val);
//         }
//     }
//     return result;
// }
//
// function inBetween(min, max) {
//     return function(number) {
//         return min <= number && number <= max;
//     };
// }
//
// function inArray(arrToCheck) {
//     return function(number) {
//         return arrToCheck.indexOf(number) != -1;
//
//     };
// }









//
// var users = [{
//     name: "Вася",
//     surname: "Иванов",
//     age: 20
// }, {
//     name: "Петя",
//     surname: "Чапаев",
//     age: 25
// }, {
//     name: "Маша",
//     surname: "Медведева",
//     age: 18
// }];
//
//
// function byField(field) {
//     return function(a, b) {
//         return a[field] > b[field] ? 1 : -1;
//     }
// }
//
//
//
// users.sort(byField("name"));
// users.forEach(function(user) {
//     console.log(user.name);
// }); // Вася, Маша, Петя
//
// users.sort(byField("age"));
// users.forEach(function(user) {
//     console.log(user.name);
// }); // Маша, Вася, Петя
//
//
//
//
//
//
//


//
// function makeBuffer() {
//     var reservoir = "";
//
//     function buffer(string) {
//         if (arguments.length === 0) {
//             return reservoir;
//         } else {
//             reservoir += string;
//         }
//
//     }
//     buffer.clear = function() {
//         reservoir = "";
//         return reservoir;
//     };
//     return buffer;
//
// }
//
// var buffer = makeBuffer();
//
// // добавить значения к буферу
// buffer("Замыкания");
// buffer(" Использовать");
// buffer(" Нужно!");
// buffer(" Йопта, рабоатет!!!!");
//
//
// // получить текущее значение
// console.log(buffer()); // Замыкания Использовать Нужно!
//
// buffer.clear();
//
// console.log(buffer()); // ""
//
// buffer("Done!!!!");
// console.log(buffer());
//




//
// Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
//
// Да, именно так, через двойные скобки (это не опечатка). Например:

// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
//
// }
//
//
// console.log(sum(1)(2)); // = 3
// console.log(sum(5)(-1)); // = 4
//
//







//
//
// function makeCounter() {
//     var currentCount = 1;
//
//     return function() { // (**)
//         return currentCount++;
//     };
// }
//
// var counter = makeCounter(); // (*)
// console.log(typeof(counter));
//
// // каждый вызов увеличивает счётчик и возвращает результат
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
//
// // создать другой счётчик, он будет независим от первого
// var counter2 = makeCounter();
// console.log(counter2()); // 1
//
//







//
//
// function formatDate(date) {
//
//
//
//
//  }
//
// console.log( formatDate(new Date(new Date - 1)) ); // "только что"
//
// console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
//
// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
//
// console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"
//









//
// var d = new Date(2014, 0, 30); // 30 января 2014
// console.log(formatDate(d)); // "30.01.14"
//
//
// function formatDate(d) {
//     var dd = d.getDate();
//     if (dd < 10) dd = "0" + dd;
//     var mm = d.getMonth() + 1;
//     if (mm < 10) mm = "0" + mm;
//     var yy = d.getFullYear() - 2000;
//     return dd + "." + mm + "." + yy;
//
// }









//
// var date = new Date();
//
// getSecondsToday(date);
//
// function getSecondsToday(date) {
//     var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
//     var secondsFromDayBegin = (24 * 3600 - (date - today) / 1000) / 3600;
//     console.log(date);
//     console.log(today);
//     console.log(secondsFromDayBegin);
//
// }
//








//
//
// function getLastDayOfMonth(year, month) {
//     var monthNext = new Date(year, month + 1);
//     monthNext.setDate(monthNext.getDate() - 1);
//     var lastDay = monthNext.getDate();
//
//
//     console.log(lastDay);
//
// }
//
//
// getLastDayOfMonth(2012, 1); // = 29
//
//
//







//
// Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.
//
// Например, для 2 января 2015:
//
//
// function getDateAgo(date, days) {
//     var dateModified = new Date(date);
//     dateModified.setDate(date.getDate() - days);
//     return dateModified;
//
// }
//
//
// var date = new Date(2015, 0, 2);
//
// console.log(getDateAgo(date, 1)); // 1, (1 января 2015)
// console.log(getDateAgo(date, 2)); // 31, (31 декабря 2014)
// console.log(getDateAgo(date, 365)); // 2, (2 января 2014)
//








//
// var date = new Date("2012", "0", "3"); // 3 января 2012
//
//
// function getWeekDay(date) {
//     // var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
//     return (date.getDay() === 0) ? 7 : date.getDay();
// }
//
//
// console.log(getWeekDay(date));
// // console.log(date.toLocaleString("en",{weekday: "short"}));








// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
//
// var d = new Date("2012", "01", "20", "3", "12");
// console.log(d);
// console.log(ms.toLocaleString("ru"));
//
// var ms = Date.parse("2012-01-20T03:12:00Z");
// console.log(ms);
// var date = new Date(ms);
// console.log(Date);




//
// var arr = [];
// for (var i = 0; i < 1000; i++) arr[i] = 0;
//
// function walkIn(arr) {
//   for (var key in arr) arr[key]++;
// }
//
// function walkLength(arr) {
//   for (var i = 0; i < arr.length; i++) arr[i]++;
// }
//
// function bench(f) {
//   for (var i = 0; i < 10000; i++) f(arr);
// }
//
// console.time("All Benchmarks");
//
// console.time("walkIn");
// bench(walkIn);
// console.timeEnd("walkIn");
//
// console.time("walkLength");
// bench(walkLength);
// console.timeEnd("walkLength");
//
// console.timeEnd("All Benchmarks");
//
//
//









//
// var arr = [];
// for (var i = 0; i < 1000; i++) arr[i] = 0;
//
// function walkIn(arr) {
//   for (var key in arr) arr[key]++;
// }
//
// function walkLength(arr) {
//   for (var i = 0; i < arr.length; i++) arr[i]++;
// }
//
// // bench для каждого теста запустим много раз, чередуя
// var timeIn = 0,
//   timeLength = 0;
// for (var i = 0; i < 100; i++) {
//   timeIn += bench(walkIn);
//   timeLength += bench(walkLength);
// }
//
//
// function bench(f) {
//   var date = new Date();
//   for (var i = 0; i < 10000; i++) f(arr);
//   return new Date() - date;
// }
//
// console.log( "Время walkIn: " + bench(walkIn) + "мс" );
// console.log( "Время walkLength: " + bench(walkLength) + "мс" );
//
//
//









//
// function sum() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//       sum += arguments[i];
//     }
//     return sum;
// }
//
//
//
// console.log(sum()); // = 0
// console.log(sum(1)); // = 1
// console.log(sum(1, 2)); // = 3
// console.log(sum(1, 2, 3)); // = 6
// console.log(sum(1, 2, 3, 4)); // = 10



// Как в функции отличить отсутствующий аргумент от undefined?
//
// function f(x) {
//     console.log(arguments.length ? 1 : 0);
// }
// f(undefined); // 1
// f(); // 0
//
//







//
// var arr = [1, 2, 3, 4, 5]
//     // getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
//
// function getSums(arr) {
//     var partialSums = [];
//     var totalSum = arr.reduce(function(sum, element) {
//         partialSums.push(sum);
//         return sum + element;
//       });
//     partialSums.push(totalSum);
//
//     return partialSums;
// }
//
// console.log(getSums(arr));
//


//

//
// var arr = ["Есть", "жизнь", "на", "Марсе"];
//
// var arrLength = [];
//
// arrLength = arr.map(function(item) {
//     return item.length;
// });
// //
// // for (var i = 0; i < arr.length; i++) {
// //     arrLength[i] = arr[i].length;
// // }
//
// console.log(arrLength); // 4,5,2,5
//






//
//
// function unique(arr) {
//     var tmp = [];
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//         tmp[arr[i]] = arr[i];
//     }
//     // console.log(tmp);
//     var j = 0;
//     for (var keys in tmp) {
//         // console.log(tmp[keys]);
//         // result.push(tmp[keys]);
//         result[j] = tmp[keys];
//         j++;
//
//     }
//     return result;
// }
//
// var strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", "8-()"
// ];
//
// console.log(unique(strings)); // кришна, харе, 8-()
//








//
//
// var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
//
// console.log(aclean(arr)); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"
//
// // aclean(arr);
//
// function aclean(arr) {
//     var temp = [];
//     for (var i = 0; i < arr.length; i++) {
//         var sChars = arr[i].split("").sort().join("").toLowerCase();
//         console.log(sChars);
//         if (!~temp.indexOf(sChars)) {
//             temp.push(sChars);
//         } else {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//     return arr;
//
// }
//







// var list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
//
// function printReverseList(list) {
//     var nextLast = 2;
//     while (nextLast) {
//         list = list.next;
//         if (list.next == null) {
//             nextLast -= 1;
//         }
//         console.log(list.value);
//     }
//
// }
//
// // var list2 = [4, 6, "next"]
// //
// //
// // console.log(list2.indexOf("next"));
//
//
//
// printReverseList(list);
//
// function printReverseList(list) {
//     if (list.next !== null) {
//       var listIn = list.next;
//         printReverseList(listIn);
//         // console.log(list.value);
//     }
//     console.log(list.value);
//
// }







//
// function printList(list) {
//     var nextLast = 2;
//     while (nextLast) {
//         console.log(list.value);
//         list = list.next;
//         if (list.next == null) {
//             nextLast -= 1;
//         }
//     }
//
// }

// function printList(list) {
//     console.log(list.value);
//     if (list.next !== null) {
//         list = list.next;
//         printList(list);
//     }
//
// }

// printList(list);









//
//
// Напишите код, который отсортирует массив объектов people по полю age.
//
// Например:
//
// var vasya = {
//     name: "Вася",
//     age: 23
// };
// var masha = {
//     name: "Маша",
//     age: 18
// };
// var vovochka = {
//     name: "Вовочка",
//     age: 6
// };
// var people = [vasya, masha, vovochka];
//
// people.sort(sortByAge);
//
//
// function sortByAge(a, b) {
//     return a.age - b.age;
//
// }


//
// function sortByName(people) {
//     for (var i = 0; i < people.length; i++) {
//       people[i]
//     }
//
// }
//


// теперь people: [vovochka, masha, vasya]
// console.log(people[0].age) // 6
// Выведите список имён в массиве после сортировки.
//
// Вывести односвязный список





//
// var arr = [1, 2, 3, 4, 5];
//
// // ... ваш код ...
//
// var arrSorted = arr.slice().sort();
// // arrSorted.sort(reverse);
// function reverse(a, b) {
//
//     return (a > b) ? true : false;
//
// }
//
//
// console.log(arr); // HTML, JavaScript, CSS (без изменений)
// console.log(arrSorted); // CSS, HTML, JavaScript
//





//
//
//
//
// var arr = [5, 2, 1, -10, 8];
//
// // отсортируйте?
//
// arr.sort(reverse);
//
// function reverse(a, b) {
//     return b - a;
// }
//
//
// console.log(arr); // 8, 5, 2, 1, -10
//
//
//
//





//
// var arr = [5, 3, 8, 1, 0, 0, 1, 1, 1];
// console.log(arr);
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// console.log(arr);
//
//
// function filterRangeInPlace(arr, min, max) {
//     for (var i = 0; i < arr.length; i++) {
//         // console.log("before " + i);
//         // console.log(arr[i] + " max " + (arr[i] >= max));
//         // console.log(arr[i] + " min " + (arr[i] <= min));
//         // console.log(arr[i] >= max || arr[i] <= min);
//         if (arr[i] >= max || arr[i] <= min) {
//             arr.splice(i, 1);
//             // console.log(arr);
//             i--;
//             // console.log("in cycle " + i);
//         }
//         // console.log("after " + i);
//
//     }
//     return arr;
// }
//








// console.log(arr); // массив изменился: остались [3, 1]









//
// var obj = {
//     className: "open menu open open"
// };
//
//
//
// function removeClass(obj, cls) {
//     var classArray = obj.className.split(" ");
//     var classArrayInitialLength = classArray.length;
//     while (~classArray.indexOf(cls)) {
//         classArray.splice(classArray.indexOf(cls), 1);
//
//     }
//     var classArrayPostLength = classArray.length;
//     if (classArrayInitialLength !== classArrayPostLength) {
//         return obj.className = classArray.join();
//     } else {
//         return obj.className;
//     }
//
//
// }
//
//
//
//
// console.log(obj.className);
// removeClass(obj, "open"); // obj.className="menu"
// console.log(obj.className);
// removeClass(obj, "blabla"); // без изменений (нет такого класса)
// console.log(obj.className);
//








//
// camelize("background-color"); // == "backgroundColor"
// camelize("list-style-image"); // == "listStyleImage";
// camelize("-webkit-transition") == "WebkitTransition";
//
// function camelize(stringWithHyphens) {
//     var arrFromStringWithHyphens = stringWithHyphens.split("");
//     // console.log(arrFromStringWithHyphens);
//     for (var i = 0; i < arrFromStringWithHyphens.length; i++) {
//         if (arrFromStringWithHyphens[i] == "-") {
//             arrFromStringWithHyphens[i + 1] = arrFromStringWithHyphens[i + 1].toUpperCase();
//             arrFromStringWithHyphens[i] = "";
//         }
//     }
//     stringWithHyphens = arrFromStringWithHyphens.join("");
//     console.log(stringWithHyphens);
//
//
//     // var newArr = arrFromStringWithHyphens.map(function(element) {
//     //     var splittedWord = element.split("");
//     //     splittedWord[0] = splittedWord[0].toUpperCase();
//     //     element = splittedWord.join("");
//     //     console.log(element);
//     //     return element;
//     //
//     // });
//     // return newArr;
//     // console.log(newArr);
//     // console.log(arrFromStringWithHyphens);
//
// }







// В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
//
// var obj = {
//         className: "open mymenu"
//     }
//     // Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
//
// addClass(obj, "new"); // obj.className="open menu new"
// addClass(obj, ""); // obj.className="open menu new me"
// addClass(obj, "me"); // obj.className="open menu new me"
// // addClass(obj, ""); // obj.className="open menu new me"
// addClass(obj, "open"); // без изменений (класс уже существует)
// addClass(obj, "menu"); // obj.className="open menu new me"
//
//
// function addClass(obj, newClass) {
//     var classNameArray = obj.className.split(" ");
//     console.log(classNameArray);
//     if (!~classNameArray.indexOf(newClass)) {
//         console.log(classNameArray.indexOf(newClass));
//         obj.className += " " + newClass;
//     }
//
// }
//
// console.log(obj.className); // "open menu new me"









//
// var arr = [-1, 2, 3, -9, 11];
//
// function findMaxSum(arr) {
//     var result = [];
//
//     for (var i = 0, length = arr.length; i < length; i++) {
//         var sum = 0;
//         for (var j = i; j < length; j++) {
//             sum += arr[j];
//             result.push(sum);
//         }
//
//     }
//     return result;
// }
//
// function getMaxOfArray(result) {
//     return Math.max.apply(null, result);
// }
//
//
//
// console.log(getMaxOfArray(findMaxSum(arr)));
// // console.log(findMaxSum(arr).getMaxOfArray());






//
// var naturals = [];
// var max = 100;
//
// var primes = [];
// var sum = 0;
//
// //
// // for (var j = 0, lastPossibleprimes = Math.ceil(Math.sqrt(max)); j < lastPossibleprimes; j++) {
// //
// //
// // }
// // fill in array with natural numbers
// for (var i = 0; i < max + 1; i++) {
//     naturals[i] = i;
// }
//
// // deleting 1 from naturals and pushing it to primess
// primes.push(naturals[1]);
// naturals[1] = 0;
// sum += 1;
// // defining last found prime number
// // var lastPrime = primes[primes.length - 1];
//
// for (var i = 0; i < max + 1; i++) {
//     // looking for number greater than 0 and adding it to primess
//     if (naturals[i] > 0) {
//         //pushing the first number GT0 into primess array
//         primes.push(naturals[i]);
//         sum += naturals[i];
//         //deleting founded primes and all non primess from naturals
//         for (var n = 1, stop = Math.ceil(max / naturals[i]); n <= stop; n++) {
//             naturals[i * n] = 0;
//         }
//
//
//         // return;
//     }
//     // if (numbers[i] == 1) {numbers[i] = 0}
//     // numbers[i] = i;
// }
//
// console.log(primes);
// console.log(sum);
//
//
//
//
//
// // console.log(numbers[101]);
//
//
//
//
//
//
//
//

// Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.
//
// Пример работы:
//
// var arr = [5, 4, 3, 8, 0];
//
//
// function filterRange(arr, min, max) {
//     var filtered = [];
//     for (var i = 0, length = arr.length; i < length; i++) {
//         if (arr[i] >= min && arr[i] <= max) {
//             filtered.push(arr[i]);
//         }
//     }
//     return filtered;
//
// }
//
//
//
//
// var filtered = filterRange(arr, 3, 5);
// console.log(filtered);
//

// теперь filtered = [5, 4, 3]
// arr не изменился





// Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.
//
// Например:
//
// var arr = ["test", 2, 1.5, false];
//
//
//
// function find(arr, strToFind) {
//     for (var i = 0, length = arr.length; i < length; i++) {
//         if (arr[i] === strToFind) {
//             return i;
//         }
//     }
//     return -1;
//
// }
//
//
//
// console.log(find(arr, "test")); // 0
// console.log(find(arr, 2)); // 1
// console.log(find(arr, 1.5)); // 2
//
// console.log(find(arr, 0)); // -1
//








//
// Напишите код, который:
//
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива
//
//
// function getNumber() {
//     var sum = 0;
//     var input = prompt("Введите число", "");
//     while (isNumber(input)) {
//         addNumber(+input, arr);
//         sum += +input;
//         // arr.push(input);
//         input = prompt("Введите число", "");
//
//     }
//     console.log(arr);
//     return sum;
// }
//
// var arr = [];
//
// function isNumber(input) {
//     return !isNaN(parseFloat(input)) && isFinite(input);
//     // return isFinite(input);
//
// }
//
// function addNumber(input, arr) {
//     arr.push(input);
//     return arr;
// }
//
//
//
//
// console.log(getNumber());
//
// console.log(isFinite(0));
// console.log(isFinite("e"));
// console.log(isFinite(""));
// console.log(isFinite(NaN));
// // console.log(isFinite(-1000000000000000000000000000000000000000000000000 * 1000000000000000000));
// console.log(isFinite(Infinity));
// console.log(isFinite(-Infinity));

// console.log(!isNaN(parseFloat(false)));







//
//
// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
//
// console.log(arr[random(arr)]);
//
// function random(arr) {
//     return Math.floor(Math.random() * (arr.length))
//
// }
//

//
// var styles = ["Джаз", "Блюз"];
// console.log(styles);
// styles.push("Rock");
// console.log(styles);
// styles[styles.length - 2] = "Classic";
// console.log(styles);
// console.log(styles.shift());
// console.log(styles);
// styles.unshift("Rap", "Raggee");
// console.log(styles);


//
// Задача из 5 шагов-строк:
//
// Создайте массив styles с элементами «Джаз», «Блюз».
// Добавьте в конец значение «Рок-н-Ролл»
// Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
// Удалите первое значение массива и выведите его console.log.
// Добавьте в начало значения «Рэп» и «Регги».
// Массив в результате каждого шага:
//
// Джаз, Блюз
// Джаз, Блюз, Рок-н-Ролл
// Джаз, Классика, Рок-н-Ролл
// Классика, Рок-н-Ролл
// Рэп, Регги, Классика, Рок-н-Ролл



//
// // до вызова
// var menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
//
// function foo(param) {
//     param.width = 1000;
//
// }
//
// console.log(menu.width);
// foo(menu);
// console.log(menu.width);




//
// let menu2 = [0, 1, 2];
//
//
// menu2.forEach((element) => console.log(element));









//
//
// function multiplyBy2(object) {
//     for (var key in object) {
//         if (isNumber(object[key])) {
//             object[key] *= 2;
//         }
//         console.log(object[key]);
//     }
// }
//
//
//
// function isNumber(element) {
//     return !isNaN(parseFloat(element)) && isFinite(element);
//
// }
//
// multiplyBy2(menu);


//
// // после вызова
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };









//
//
// let salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
//
//
// function addSalaries(salaries) {
//     let maxSalary = 0;
//     for (let name in salaries) {
//         if (salaries[name] > maxSalary) {
//             maxSalary = salaries[name];
//         }
//     }
//
//     return (maxSalary) ? maxSalary : "Нет сотрудников";
// }
//
//
// console.log(addSalaries());
//
// //... ваш код выведет 650









//
//
// function isEmpty(obj) {
//     for(let keys in obj) {
//         return false;
//     }
//     return true;
// }
//
// var schedule = {};
//
// console.log(isEmpty(schedule)); // true
//
// schedule["8:30"] = "подъём";
//
// console.log(isEmpty(schedule)); // false









//
//
// var menu = {
//   width: 300,
//   height: 200,
//   title: "Menu"
// };
//
// var x = "height";
// console.log(menu[x]);
//
// console.log(menu.width);
//
// for (var key in menu) {
//   // этот код будет вызван для каждого свойства объекта
//   // ..и выведет имя свойства и его значение
//
//   console.log( "Ключ: " + key + " значение: " + menu[key] );
// }









//
//
// let user = {}; // Создайте пустой объект user.
// user.name = "Вася"; // Добавьте свойство name со значением Вася.
// console.log(user.name);
// user.surname = "Petrov"; // Добавьте свойство surname со значением Петров.
// user.name = "Sergey"; // Поменяйте значение name на Сергей.
// console.log(user.name);
// delete user.name; // Удалите свойство name из объекта.
// console.log(user.name);
//







// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
//
//
//
// console.log(extractCurrencyValue("$120"));


//
// function truncate(str, charNum) {
//     return (str.length > charNum) ? str.slice(0, charNum - 3) + "..." : str;
//
// }
//
//
//
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)); // = "Вот, что мне хоте..."
// console.log(truncate("Всем привет!", 20)); //= "Всем привет!"
//
//
//


//
//
// function checkSpam(str) {
//     let spam = false;
//     let spamWord = ["viagra", "xxx"];
//     for (let i = 0; i < spamWord.length; i++) {
//         spam = ~(str.toLowerCase().indexOf(spamWord[i], 0));
//         if (spam) {
//             return true;
//         }
//     }
// }
//
//
//
//
// console.log(checkSpam("buy ViAgRA now"));
// console.log(checkSpam("free xxxxx"));
// console.log(checkSpam("innocent rabbit"));
//
//





//
//
// function ucFirst(str) {
//     return (str == "") ? "" : str[0].toUpperCase() + str.slice(1);
//
//
// }
//
//
// console.log(ucFirst("") == ""); // нет ошибок при пустой строке
//
// console.log(ucFirst("вася") === "Вася");
//
// console.log(ucFirst("Вася"));
//








//
// console.log( "Интерфейс"               [0].toLowerCase() ); // "и"
//



//
//
// start().map((element) => element*5)
//     .map(process)
//     .forEach((element) => console.log(element));
//
// function start() {
//     return [1, 3, 5, 7, 9]
//
// }
//
//
// function process(element) {
//     return element+"t";
//
// }
//
// function output(element) {
//     console.log(element);
//
// }




// let arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//     console.log(`arr[${i}] = ${arr[i]}`);
// }

// let printElement = function(element) {
//     console.log(element);}
//
//  arr.forEach(printElement);


// arr.forEach((element) => console.log(element));


// [1, 2, 3, 4].map((element) => ++element)
//    .forEach((element) => console.log(element));



// console.log(arr2);




// for (let x = 0; x < 10; x++) {
//     console.log(`x: ${x*2}`);
//
// }

// console.log(`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis n
//   ostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis a
//   ute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
//   ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui of
//   ficia deserunt mollit anim id est laborum.`);

//
// console.log(`x: ${
//   for (let x = 0; x < 10; x++) {
//     x*2`;
//   }});






//
// (function() {
//   console.log("test");
// })();




//
// var x = 3;
// function func(randomize) {
//   if (randomize) {
//     var x = Math.random();
//     return x;
//
//   }
//   return console.log(x);
// }
//
// func(false);


//
// var i = 555;
// for (let i = 10; i > 0; i--) {
// console.log(i);
// var x = 5;
// }
//
// console.log("last: " + x);


// function fib(n) {
//     var a = 0;
//     var b = 1;
//
//     for (var i = 2; i <= n; i++) {
//         c = a + b;
//         a = b;
//         b = c;
//     }
//     return c;
// }
//



//
// function fib(n) {
//     if (n === 0) {return 0 ;}
//     else if (n === 1) { return 1;}
//     else {
//       return fib(n - 1) + fib(n - 2);
//     }
//
// }
//
// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757









//
// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
// }
//
//
//
//
//
//
// console.log(factorial(1)); // 1! = 1
// console.log(factorial(2)); // 2! = 2 * 1 = 2
// console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
// console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
// console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120
//








// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:



// function sumTo(n) {
//     var result = 0;
//     result += n;
//     if (n > 0) {
//         result += sumTo(--n);
//     }
//     return result;
//
//
// }
//
// function sumTo(n) {
//     var result = 0;
//     return (1+n)/2*n;
// }
// function sumTo(n) {
//     var result = 0;
//     for (var i = 1; i <= n; ++i) {
//         result += i;
//         // console.log(result);
//     }
//     return result;
// }


// console.log("sumTo 0 = " + sumTo(0) + " //0");
// console.log("sumTo 1 = " + sumTo(1) + " //1");
// console.log("sumTo 2 = " + sumTo(2) + " //3");
// console.log("sumTo 3 = " + sumTo(3) + " //6");
// console.log("sumTo 4 = " + sumTo(4) + " //10");
// console.log("sumTo 5 = " + sumTo(5) + " //15");
// console.log("sumTo 6 = " + sumTo(6) + " //21");
// console.log("sumTo 100 = " + sumTo(100) + " //5050");








//
// var a;
// var b;
//
// function min(a, b) {
//     return (a <= b) ? a : b;
// }
//
// console.log(min(2, 5) == 2);
// console.log(min(3, -1) == -1);
// console.log(min(1, 1) == 1);
//






// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     }
//     return confirm("Родители разрешили?");
// }
//
//
// function checkAge(age) {
//     return (age > 18) ? true : return confirm("Родители разрешили?";
//     }









// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
// Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.
//
//
// outer:
//     for (var i = 2; i <= 100; i++) {
//         for (var j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 break;
//             } else if (j == i - 1 && i % j !== 0) {
//                     console.log(i + " Простое!");
//                 }
//             }
//         }
//







//
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
//
// var userInput = 0;
// do {
//   userInput = prompt("Введите число больше 100:");
//   console.log(userInput);
//   if (userInput === null) break;
// } while ( userInput <= 100);

// userInput = prompt("Введите число больше 100:");
// if (userInput !== null) {
//     while (userInput <= 100) {
//         userInput = prompt("Введите число больше 100:");
//         console.log(userInput);
//         if (userInput === null) break;
//     }
// }









// При помощи цикла for выведите чётные числа от 2 до 10.
//
// for (var i = 2; i <= 10; i += 2) {
//   console.log(i);
// }
//
// for (var i = 0; i < 3; i++) {
//   console.log( "номер " + i + "!" );
// }
// console.log(i);

//
// var i = 0;
// while ( i < 3 ) {
//   console.log( "номер " + i + "!" );
//   i++;
// }





// var res = confirm("Вы действительно хотите покинуть страницу?");
//
// console.log(res);

// console.log("" + 1 + 0); // "10"
// console.log("" - 1 + 0); // -1
// console.log(true + false); // truefalse -----1
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // "9px"
// console.log("$" + 4 + 5); // "$45"
//
// console.log("4" - 2); // 2
//
// console.log("4px" - 2); // NaN
//
// console.log(7 / 0); // infinity
//
// console.log("  -9\n" + 5); // "  -9\n5"
// console.log("  -9\n" - 5); // -14
// console.log(5 && 2); // 2 true
//
// console.log(2 && 5); // 5 true
//
// console.log(5 || 0); // 5 true
//
// console.log(0 || 5); // 5 true
// console.log(null + 1); // "null1" -----1
// console.log(undefined + 1); // "undefined1" Nan
// console.log(null == "\n0\n"); // false
// console.log(+null == +"\n0\n"); // true
//









// Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.

//
// function isInteger(num) {
//     if (num == (num ^ 0)) {
//         console.log(num + " целое!");
//     } else {
//         console.log(num + " дробное!");
//
//     }
// }
//
//
// isInteger(1);
// isInteger(0.5);
// isInteger(0);
// isInteger(-0.5);







// console.log("hello, world!");





// var obj = {a: 1};
//
// var increment = function(obj ) {
//   console.log("before" + obj.a);
//   obj = {a: 2};
//   console.log("after" + obj.a);
// };
//
// increment(obj);
//
// console.log(obj.a);
