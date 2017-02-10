(() => {
    'use strict';

    function renderMovies() {

    }

    let movieListFrag = document.createDocumentFragment('div');
    let movieList = document.createElement('div');
    movieList.classList.add('movie-list');

    function addMovieToList(movie) {
        let poster = document.createElement('img');
        poster.classList.add('movie-list__poster');
        poster.src = movie.Poster;
        movieList.appendChild(poster);
    }

    function getMovies(url, done) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = () => {
            if (xhr.status === 200) {
                let moviesData = JSON.parse(xhr.response);
                console.log(moviesData);
                done(moviesData.Search);
            } else {
                console.error(xhr.statusText);
            }
        };

        xhr.onerror = function(error) {
            console.error(error);
        };

        xhr.send();
    }


    let searchBtn = document.querySelector('.search');

    searchBtn.addEventListener('submit', function(e) {

        search();
        e.preventDefault();
        // e.stopImmediatePropagation();
    });


    let searchCount = 0;
    let searchMessage;

    function search() {

        let searchQuery = document.querySelector('.search__field').value;
        console.log(searchCount);
        if (searchCount === 0) {
                searchMessage = document.createElement('div');
                searchMessage.classList.add('search__message');
                document.body.appendChild(searchMessage);
                searchMessage = document.querySelector('.search__message');
            }

        searchCount++;

        searchMessage.innerHTML = `Result for query: ${searchQuery}`;
        document.querySelector('.search__field').value = '';

        let url = `http://www.omdbapi.com/?s=${searchQuery}`;

        getMovies(url, function(movies) {
            let oldMovieList = document.querySelector('.movie-list');
            if (oldMovieList) {
                movieList.innerHTML ='';
            }
            movies.forEach(function(movie) {
                addMovieToList(movie);
            });
            document.body.appendChild(movieList);
        });

    }

})();
