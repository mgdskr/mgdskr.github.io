function getNumber(userPrompt) {

    var userInput = prompt(userPrompt, "");

    while (isNaN(userInput)) {
        alert("Это не число");
        userInput = prompt(userPrompt, "");
    }

    return userInput;
}


function myPow(getBase, getExponent) {
    if (!Number.isInteger(getExponent)) {
      getExponent = Math.round(getExponent);
      alert("Функция не рабоает с дробными степенями, степень будет округлена до " + getExponent);

    }
    var result = 1;

    for (var i = 0; i < Math.abs(getExponent); i++) {
        result *= getBase;
    }

    if (getExponent < 0) {
        result = 1 / result;
    }

    return console.log(result);

}


var getBase = getNumber("Base ?");
var getExponent = getNumber("Exponent ?");

myPow(getBase, getExponent);





// Написать функцию pow, аналогичную Math.pow, которая должна возводить указанное число в указанную степень. Указать число и степень пользователь должен через команду prompt. Результат выполнения функции вывести в консоль. Работать с целыми числами, большими, меньшими, и равными нулю. Бесконечности можно не обрабатывать
