(() => {
    'use strict';

    //object with questions
    let testData = {
        title: "Test",
        questions: [{
            title: "Question 1",
            answerOptions: ["Option 1.1", "Option 1.2", "Option 1.3"]
        }, {
            title: "Question 2",
            answerOptions: ["Option 2.1", "Option 2.2", "Option 2.3"]
        }, {
            title: "Question 3",
            answerOptions: ["Option 3.1", "Option 3.2", "Option 3.3"]
        }],
        submitValue: "Check my results!"
    };

    //lets define our storage
    let myStorage = localStorage;
    //add data object to local storage
    myStorage.test = JSON.stringify(testData);
    //get data from local storage
    let data = JSON.parse(myStorage.getItem('test'));
    console.log(data);


    class Test {
        //using destructor to get parameters
        constructor({
            title = 'Test',
            questions,
            submitValue = 'Check results!'
        }) {
            //write parameters to specie's properties
            this.title = title;
            this.questions = questions;
            this.submitValue = submitValue;
            this.form = '';
            this.userAnswers = {};

            this.renderTest();
            this.createAnswersEmptyObj();
            this.checkboxHandler();
            this.submitHandler();
        }

        renderTest() {
            let pageContent =
                `<h1>${this.title}</h1>
            <form method="GET" action="index.html">
                <ol>
                    ${this.questions.map((question, qnum) => `
                        <li>
                            <h2>${question.title}</h2>
                            <ul>
                                ${question.answerOptions.map((option) => `
                                    <li><label><input type = "checkbox" name = "q${qnum}" value = "${option}">
                                    <span>${option}</span>
                                    </label></li>`).join('')}
                            </ul>
                        </li>`).join('')}
                </ol>
                <input type="submit" value="${this.submitValue}">
            </form>`;

            //inserting form to our page
            let body = document.body;
            let test = document.createElement('div');
            test.classList.add('test');
            test.innerHTML = pageContent;
            body.insertBefore(test, body.firstChild);

            //define form to use in other methods
            this.form = test.querySelector('form');

        }
        //поскольку мы не знаем заранее сколько вопросов будет в тесте - создаем массив, а в нем объкты для ответов на каждый вопрос
        createAnswersEmptyObj() {
            for (let i = 0, max = this.questions.length; i < max; i++) {
                // вопрос из анкеты
                let question = this.questions[i];
                // ответы пользователя в массиве ответов
                let answer = this.userAnswers[`q${i}`] = {};
                for (let k = 0, max = question.answerOptions.length; k < max; k++) {
                    // добавляем в ответ пользователя все опции с флагом false, ипользуем 0 - далее будем через ~ при нажатии менять на 1 и обратно при повторном нажатии
                    answer[question.answerOptions[k]] = 0;
                }
            }
            console.log(this.userAnswers);
        }

        checkboxHandler() {
            this.form.addEventListener('click', (e) => {
                if (e.target.tagName === 'INPUT' && e.target.type === "checkbox") {
                    this.userAnswers[e.target.name][e.target.value] = ~this.userAnswers[e.target.name][e.target.value];
                    console.clear();
                    console.log(this.userAnswers);

                }
            })
        }
        submitHandler() {
            let formData = new FormData(this.form)

            this.form.querySelector('input[type="submit"]').addEventListener('click', (e) => {
                console.log(formData);
                // console.log(this.form.q1);
                // console.log(this.form.q2);
                // e.preventDefault();
            });

        }

    }

    let newTest = new Test(data);

})();
// Домашнее задание:
//
// За основу взять домашку 3-4. Перед стартом приложения записать в localStorage объект с вопросами и ответами теста. Потом прочесть данные из localStorage, отрендерить их используя любой javascript-шаблонизатор
// На странице должна быть возможность пройти тест. При клике на кнопку "Проверить мои результаты" нужно выполнить проверку правильных ответов и вывести сообщение об успешном или не успешном прохождении теста. После вывода сообщения, обнулить отметки чтоб тест можно было пройти опять
// В каждом вопросе может быть только один правильный вариант ответа
// Само сообщение о результатах теста нужно сделать в стиле простого модального окна. Не обязательно соблюдать такой же дизайн как в Bootstrap, можете сделать по своему, но верстка и код появления модальки должны быть написаны вами. Допускается использование jQuery. Кому хочется больше веселья, делайте без неё
// Бонусная часть: в вопросах должна быть возможность выбрать несколько правильных вариантов ответа, не только один
