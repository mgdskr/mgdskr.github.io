(() => {

    //object with questions
    let data = {
        "title": "Тест",
        "questions": [{
            "title": "Язык frontend разработки",
            "answerOptions": ["JavaScript", "PHP", "Ruby", "Java"]
        }, {
            "title": "Что такое jQuery",
            "answerOptions": ["фреймворк", "библиотека", "язык программирования"]
        }, {
            "title": "Укажите все менеджеры задач (task-runners)",
            "answerOptions": ["Gulp", "Grunt", "Git"]
        }],
        "submitValue": "Проверить результаты!",
        "rightAnswers": "123"
    };

    ////////////////записываем объект в localStorage/////////////////
    //lets define our storage
    let myStorage = localStorage;
    //add data object to local storage
    myStorage.test = JSON.stringify(data);
    //get data from local storage
    let testData = JSON.parse(myStorage.getItem('test'));

    /////////////////////создаем тест///////////////////////

    class Test {
        //using destructor to get parameters
        constructor({
            title = 'Test',
            questions,
            submitValue = 'Check results!',
            rightAnswers
        }) {
            //write parameters to specie's properties
            this.title = title;
            this.questions = questions;
            this.submitValue = submitValue;
            this.rightAnswers = rightAnswers;
            this.userAnswers = [];
            //reusable DOM elements
            this.body = document.body;
            this.form = '';
            //run all methods
            this.renderTest();
            this.createAnswersEmptyObj();
            this.checkboxHandler();
            this.submitHandler();
        }

        renderTest() {
            let pageContent =
                `<h1>${this.title}</h1>
            <form method="POST" action="#">
                <ol>
                    ${this.questions.map((question, qNum) => `
                        <li>
                            <h2>${question.title}</h2>
                            <ul>
                                ${question.answerOptions.map((option, oNum) => `
                                    <li><label><input type = "checkbox" name = "q${qNum}" value = "o${oNum}">
                                    <span>${option}</span>
                                    </label></li>`).join('')}
                            </ul>
                        </li>`).join('')}
                </ol>
                <input type="submit" value="${this.submitValue}">
            </form>`;

            //inserting form to our page
            let test = document.createElement('div');
            test.classList.add('test');
            test.innerHTML = pageContent;
            this.body.insertBefore(test, this.body.firstChild);

            //define form to use in other methods
            this.form = test.querySelector('form');

        }

        //поскольку мы не знаем заранее сколько вопросов будет в тесте - создаем массив, а в нем объкты для ответов на каждый вопрос
        createAnswersEmptyObj() {
            for (let i = 0, max = this.questions.length; i < max; i++) {
                // вопрос из анкеты
                let question = this.questions[i];
                // ответы пользователя в массиве ответов в виде пустого массива
                this.userAnswers[i] = [];
                for (let k = 0, max = question.answerOptions.length; k < max; k++) {
                    // добавляем в ответ пользователя все опции с флагом false, ипользуем 0 - далее будем при нажатии менять на 1 и обратно при повторном нажатии
                    this.userAnswers[i].push(0);
                }
            }
        }

        checkboxHandler() {
            //ставим хендлер на форму
            this.form.addEventListener('click', (e) => {
                //ищем чекбоксы
                if (e.target.tagName === 'INPUT' && e.target.type === "checkbox") {
                    //определяем место, куда записать ответ
                    let answer = this.userAnswers[e.target.name.slice(1)]; //name = "q[0-9]", обрезаем q
                    //определяем позицию выбранной опции в массиве ответов
                    //записать нужно в конец, для первой опции должны получить не 100, а 001
                    let optionPosition = answer.length - 1 - e.target.value.slice(1); //name = "o[0-9]"
                    //меняем значение 0 на 1 или 1 на 0
                    answer[optionPosition] = answer[optionPosition] === 0 ? 1 : 0;
                    // console.clear();
                    // console.log(this.userAnswers);

                }
            });
        }

        submitHandler() {
            this.form.querySelector('input[type="submit"]').addEventListener('click', (e) => {
                //определям код ответа - соединяем массив ответов в строку и переводим двоичное представление к 10-чной
                //если порядок вопросов не меняется - нам все равно сколько опций в каждом вопросе и сколько знаков занимает конкретный код, поэтому просто соединяем в строку и проверям
                //недостаток - не ясно в каком вопросе неверный ответ
                let finalAnswerCode = '';
                for (let i = 0, max = this.userAnswers.length; i < max; i++) {
                    let answerCode = parseInt(this.userAnswers[i].join(''), 2);
                    finalAnswerCode += answerCode;
                }

                this.renderModalWindow(finalAnswerCode === this.rightAnswers ? 'Вы успешно прошли тест!' : 'Попробуйте еще раз');

                this.resetData();

                e.preventDefault();
            });
        }

        renderModalWindow(result) {
            let modalWindow = document.createElement('div');

            modalWindow.classList.add('modal-window');
            modalWindow.innerHTML = `<div class="modal-window__inner">${result}<div/>`;
            this.body.appendChild(modalWindow);

            // устанавливаем хендлер на закрытие
            modalWindow = document.querySelector('.modal-window');

            modalWindow.addEventListener('click', (e) => {
                this.body.removeChild(modalWindow);
            });
        }

        resetData() {
            this.form.querySelectorAll('input[type="checkbox"]').forEach((el) => el.checked = false);
            this.createAnswersEmptyObj();
        }
    }

    let newTest = new Test(data);

})();
