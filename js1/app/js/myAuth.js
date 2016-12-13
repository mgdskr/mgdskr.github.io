function homework2() {
    var users = fillArray(5);
    var login = getName("Введите имя пользователя");

    loginCheck(login, users);
}



//functions

function fillArray(namesQnt) {
    var users = {};
    for (var i = 0; i <= namesQnt - 1; i++) {
        var nameNum = i + 1;
        users[i] = getName("Введите имя " + nameNum + " для заполнения массива");
    }
    return users;
}


function getName(userPrompt) {

    var userInput = prompt(userPrompt, "");

    //check for empty string
    while (userInput.length <= 0) {
        alert("Это поле не может быть пустым");
        userInput = prompt(userPrompt, "");
    }

    return userInput;
}


function loginCheck(login, users) {

    for (var key in Object.keys(users)) {
        if (login == users[key]) {
            return alert(login + ", вы успешно вошли");
        }
    }

    alert("Пользователя " + login + " не существует");
}





// Создать программу, которая будет выполнять следующие действия:
//
// Циклом заполнить массив с помощью команды prompt в котором будет список из 5-ти любых имен
// Потом вывести с помощью prompt сообщение с просьбой ввести имя пользователя
// Введенное имя, циклом сравнивать с именами в массиве
// Если нет совпадения, то есть введенное имя пользователя не существует в массиве - выдавать с помощью alert сообщение об ошибке
// Если есть совпадение - выводить сообщение "Андрей, вы успешно вошли". Вместо "Андрей" должно быть имя текущего пользователя
