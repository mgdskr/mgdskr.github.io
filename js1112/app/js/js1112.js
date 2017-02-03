// (() => {'use strict';})();

//подключение и запуск шаблонизатора для добавления изображений в слайдер
$(function() {
    var html = $('#carousel-template').html();
    var content = tmpl(html, {});

    $('body').append(content);
});

//подключение и запуск карусели
$(() => {
    $('.carousel').myCarousel({speed: 1000});
});




//использование шаблонизатора
(() => {
    'use strict';

    //подключение объекта с данными
    //создаем новый запрос
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://5890b667b1c4481200f6c236.mockapi.io/users', true);

    xhr.send();

    //если получаем данные - обрабатываем
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        // console.log(xhr.status);

        //парсим данные в объект данных для шаблонизатора
        var data = {
            profiles: JSON.parse(xhr.response)
        };

        //получаем шаблон
        var html = document.querySelector('#profile-template').innerHTML;



        //заполняем его данными
        var content = tmpl(html, data);

        //вставляем данные на страницу
        var body = document.body;
        var newDiv = document.createElement('div');
        newDiv.classList.add('profiles');
        newDiv.innerHTML = content;
        body.appendChild(newDiv);
    }
})();
