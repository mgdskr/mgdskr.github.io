function homework1() {

  var base = getNumber("Введите число:");
  var exponent = getNumber("Введите степень:");

  myPow(base, exponent);
}
//functions

function getNumber(userPrompt) {

    var userInput = prompt(userPrompt, "");

    while (isNaN(userInput)) {
        alert("Это не число");
        userInput = prompt(userPrompt, "");
    }

    return userInput;
}

function myPow(base, exponent) {

    //checking exponent for being integer
    if (exponent % 1 != 0) {
        exponent = Math.round(exponent);
        alert("Функция не рабоает с дробными степенями, степень будет округлена до " + exponent);
    }

    console.log("exponent " + exponent);

    var result = 1;

    for (var i = 0; i < Math.abs(exponent); i++) {
        result *= base;
    }

    if (exponent < 0) {
        result = 1 / result;
    }

    return console.log(result);

}





// Написать функцию pow, аналогичную Math.pow, которая должна возводить указанное число в указанную степень. Указать число и степень пользователь должен через команду prompt. Результат выполнения функции вывести в консоль. Работать с целыми числами, большими, меньшими, и равными нулю. Бесконечности можно не обрабатывать
