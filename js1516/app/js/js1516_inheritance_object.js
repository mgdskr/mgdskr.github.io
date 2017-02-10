(() => {
    'use strict';
    ///////////////////// ООП в прототипном стиле/////////

    let human = {
        humanConstructor: function(humanProps) {
            this.name = humanProps.name || "Human being";
            this.age = humanProps.age || 30;
            this.sex = humanProps.sex || "male";
            this.height = humanProps.height || 180;
            this.weight = humanProps.weight || 80;
        },
        toWalk: function(speed) {
            console.log(`I am running at ${speed} km/hour`);
        }
    };

    let worker = {
        workerConstructor: function(humanProps, workerProps) {
            human.humanConstructor(humanProps);
            this.job = workerProps.job || "developer";
            this.salary = workerProps.salary || 5000;
        },
        toWork: function() {
            console.log('I am working hard');
        },
        __proto__: human
    };

    let student = {
        studentConstructor: function(humanProps, studentProps) {
            human.humanConstructor(humanProps);

            this.university = studentProps.university || 'KPI';
            this.scholarship = (studentProps.scholarship !== undefined) ? studentProps.scholarship : 2000;
        },
        watchMovies: function() {
            console.log('I am watching my favorite serial');
        },
        __proto__: human
    };

    student.studentConstructor({
        name: "vasia",
        age: 22,
        sex: "male",
        height: 190,
        weight: 90
    }, {
        university: "GOIT",
        scholarship: 0

    });

    console.log('===============proto style======================');
    console.log('===============students own method and property');
    console.log('student.scholarship:', student.scholarship);
    student.watchMovies();
    console.log('===============inherited method and property');
    console.log('student.name:', student.name);
    student.toWalk(15);

})();
