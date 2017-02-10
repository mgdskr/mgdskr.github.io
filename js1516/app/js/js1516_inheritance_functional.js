(() => {
    'use strict';
    ///////////////////// OOП в функциональном стиле/////////

    function Human(humanProps) {
        this.name = humanProps.name || "Human being";
        this.age = humanProps.age || 30;
        this.sex = humanProps.sex || "male";
        this.height = humanProps.height || 180;
        this.weight = humanProps.weight || 80;

        this.toWalk = function(speed) {
            console.log(`I am running at ${speed} km/hour`);
        };
    }

    function Worker(humamProps, workerProps) {
        Human.call(this, humanProps); //отнаследуем

        this.job = workerProps.job || "developer";
        this.salary = workerProps.salary || 5000;

        this.toWork = function() {
            console.log('I am working hard');
        };
    }

    function Student(humanProps, studentProps) {
        Human.call(this, humanProps);

        this.university = studentProps.university || 'KPI';
        this.scholarship = (studentProps.scholarship !== undefined) ? studentProps.scholarship : 2000;

        this.watchMovies = function() {
            console.log('I am watching my favorit serial');
        };
    }




    let student = new Student({
        name: "Vasia",
        age: 22,
        sex: "male",
        height: 190,
        weight: 90
    }, {
        university: "GOIT",
        scholarship: 0

    });

    console.log('===============functional style=================');
    console.log('===============students own method and property');
    console.log('student.scholarship:', student.scholarship);
    student.watchMovies();
    console.log('===============inherited method and property');
    console.log('student.name:', student.name);
    student.toWalk(15);

})();
