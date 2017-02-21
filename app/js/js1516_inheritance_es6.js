(() => {
    'use strict';
    ///////////////////// ES6 Style - the simplest way to organize classes/////////

    class Human {
        constructor({
            name = "Human being",
            age = 30,
            sex = "male",
            height = 180,
            weight = 80
        }) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.height = height;
            this.weight = weight;
        }
        toWalk(speed) {
            console.log(`I am running at ${speed} km/hour`);
        }
    }

    class Worker extends Human {
        constructor(humanProps, {
            job = "developer",
            salary = 5000
        }) {
            super(humanProps);
            this.job = job;
            this.salary = salary;
        }
        toWork() {
            console.log('I am working hard');
        }
    }

    class Student extends Human {
        constructor(humanProps, {
            university,
            scholarship
        }) {
            super(humanProps);
            this.university = university;
            this.scholarship = scholarship;
        }
        watchMovies() {
            console.log('I am watching my favorite serial');
        }
    }




    let student = new Student({
        name: "vasia",
        age: 22,
        sex: "male",
        height: 190,
        weight: 90
    }, {
        university: "GOIT",
        scholarship: 0

    });

    console.log('===============es6 style========================');
    console.log('===============students own method and property');
    console.log('student.scholarship:', student.scholarship);
    student.watchMovies();
    console.log('===============inherited method and property');
    console.log('student.name:', student.name);
    student.toWalk(15);
})();
