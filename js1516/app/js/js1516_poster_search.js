(() => {
    'use strict';

    //запрос на сервер
    function getMovies(url) {
        //возвращает новый промис
        return new Promise(function(resolve, reject) {
            //создаем новый запрос
            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);

            //по загрузке данных - обрабатываем объект
            xhr.onload = () => {
                if (xhr.status === 200) {
                    let moviesData = JSON.parse(xhr.response);
                    console.log(moviesData);
                    //наши данные в Search
                    resolve(moviesData.hits);
                } else {
                    reject(xhr.statusText);
                }
            };

            xhr.onerror = function(error) {
                reject(error);
            };

            xhr.send();
        });
    }


    //ставим хендлер на сабмит формы поиска
    //работает как по нажатию на кнопку поиска так и на Enter
    let searchForm = document.querySelector('.search__form');
    searchForm.addEventListener('submit', function(e) {
        search();
        e.preventDefault();
    });

    //сюда будем вставлять сообщение - результат поиска
    let searchMessage = document.querySelector('.search__message');
    //а сюда - постеры
    let movieList = document.querySelector('.movie-list');

    //хендлер поиска
    function search() {
        //определяем поисковый запрос
        let searchQuery = document.querySelector('.search__field').value;
        //проверяем чтобы не пустой
        if (searchQuery === '') {
            return;
        }
        //выводим сообщение - ведется поиск
        let searchMessageText = {
            processing: `Searching for ${searchQuery}`,
            done: `Search results for query: ${searchQuery}`,
            error: `Сервер не отвечает. Попробуйте повторить запрос позднее или пробуйте другой запрос, например "summer"`
        };

        //выводим сообщение об обратке запроса и добавляем в конец запроса точки
        let message = searchMessageText.processing;
        let dotsCounter = 0;
        let intervalId = setInterval(function() {
            if (dotsCounter++ === 3) {
                message = searchMessageText.processing;
                dotsCounter = 0;
            } else {
                message += '.';
            }
            searchMessage.innerHTML = message;
        }, 400);


        //обнуляем поле ввода
        document.querySelector('.search__field').value = '';
        //очищаем предыдущие результаты поиска
        movieList.innerHTML = '';

        //создаем урл запроса
        let apiKey = '4524919-e335179e57b7d83645cf55658';
        let url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo`;
        // let url = `http://www.omdbapi.com/?s=${searchQuery}`;

        //делаем запрос
        getMovies(url)
            .then(movies => {
                clearInterval(intervalId);
                searchMessage.innerHTML = searchMessageText.done;
                return movies;
            })
            .then(movies => {
                renderMovies(movies);
            })
            .catch(error => {
                clearInterval(intervalId);
                searchMessage.innerHTML = error + " " + searchMessageText.error;
            });


    }


    //отображаем постеры
    function renderMovies(movies) {
        let searchResults = '';
        searchResults = movies.map(movie => `
            <img class="movie-list__poster" src="${movie.webformatURL}">
            `).join('');
        movieList.innerHTML = searchResults;
    }


})();
