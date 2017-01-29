(function() {
    "use strict";
}());

let range = {
    from: 1,
    to: 5
}

// сделаем объект range итерируемым
range[Symbol.iterator] = function() {
    let current = this.from;
    let last = this.to;

    // метод должен вернуть объект с методом next()
    return {
        next() {
            if (current <= last) {
                return {
                    done: false,
                    value: current++
                };
            } else {
                return {
                    done: true
                };
            }
        }

    }
};

for (let num of range) {
    console.log(num); // 1, затем 2, 3, 4, 5
}
for (let num of range) {
    console.log(num); // 1, затем 2, 3, 4, 5
}


// console.log("hello");

//
// function loadProfiles(userNames) {
//     // {
//     //     var test = "asfdasdf";
//     //     console.log(test);
//     // }
//     // console.log(test);
//     var loadingMessage,
//         flashMessage;
//     if (userNames.length > 3) {
//         loadingMessage = 'this might take a while';
//         console.log(flashMessage);
//     } else {
//         flashMessage = 'loading profiles';
//     }
//     console.log(loadingMessage, flashMessage);
// }
//
// loadProfiles(['vasya', 'dima', 'kris', 'asdf']);


//
// function process(name) {
//     console.log(`Hello, ${name}!
//     Your name lowercased is "${name.toLowerCase()}".`);
//
// }
//
//
//
// process;
//
//
//
// var myobs = {
//     prop1: "value1",
//     prot: function() {
//
//     }
//
// };
//
// var a = [];
