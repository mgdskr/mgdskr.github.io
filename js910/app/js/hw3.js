"use strict";

var programmersTest = {

    data: {
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
    },



    addTag: {
        h1: function(tagContent) {
            return "<h1>" + tagContent + "</h1>";
        },
        h2: function(tagContent) {
            return "<h2>" + tagContent + "</h2>";
        },
        ol: function(tagContent) {
            return "<ol>" + tagContent + "</ol>";
        },
        ul: function(tagContent) {
            return "<ul>" + tagContent + "</ul>";
        },
        li: function(tagContent) {
            return "<li>" + tagContent + "</li>";
        },
        form: function(tagContent) {
            return `<form method="GET" action="index.html">${tagContent}</form>`;
        },
        input: {
            type: {
                checkbox: function(name) {
                    var id = name.replace(/\s+/g, '');
                    return `<input type = "checkbox" name = "${name}" value = "${name}" id="${id}"><label for="${id}">${name}</label>`;
                },
                submit: function(value) {
                    return `<input type = "submit" value = "${value}">`;
                }
            }
        }
    },



    createPage: function() {
        var pageContent = "";

        pageContent += this.addTag.h1(this.data.title);
        pageContent += this.addTag.form(this.createQuestionnaire() + this.addTag.input.type.submit(this.data.submitValue));

        var body = document.body;
        var testForm = document.createElement('div');
        testForm.innerHTML = pageContent;
        body.insertBefore(testForm, body.firstChild);
    },


    createQuestionnaire: function(questions) {
        var questionnaire = "";

        for (var i = 0, l = this.data.questions.length; i < l; i++) {
            questionnaire += this.addTag.li(this.createQuestion(this.data.questions[i]));
        }

        return this.addTag.ol(questionnaire);
    },


    createQuestion: function(question) {
        var list = this.addTag.h2(question.title);

        for (var i = 0, l = question.answerOptions.length; i < l; i++) {
            list += this.addTag.li(this.addTag.input.type.checkbox(question.answerOptions[i]));
        }

        return this.addTag.ul(list);
    }
};

programmersTest.createPage();
