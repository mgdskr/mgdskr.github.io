'use strict';

document.addEventListener('click', btnActionHandler);


function btnActionHandler() {
    if (event.target.tagName != 'BUTTON') {
        return;
    }
    if (!event.target.hasAttribute('data-action')) {
        return;
    }

    var btn = event.target;

    var action = btn.getAttribute('data-action');
    if (!action) {
        return;
    }

    return actionHandler[action]();

}




///////////////////////////////////////////////

var actionHandler = (function() {

    var timer;

    function start() {
        if (!timer) {
            timer = new Timer();
        }
        if (!timer.running) {
            timer.run();
            var btn = event.target;
            btn.setAttribute('data-action', 'stop');
            btn.innerHTML = "stop";
        }
    }



    function stop() {
        if (timer) {
            timer.stop();
            var btn = event.target;
            btn.setAttribute('data-action', 'start');
            btn.innerHTML = "start";
        }
    }

    function split() {
        if (timer) {
            timer.split();
        }
    }


    function reset() {
        if (timer) {
            timer.reset();

            var btn = event.target;
            var btnStartStop = btn.parentNode.firstElementChild;
            var btnStartStopAction = btnStartStop.getAttribute('data-action');

            if (btnStartStopAction === 'stop') {
                btnStartStop.setAttribute('data-action', 'start');
                btnStartStop.innerHTML = "start";
            }

        }
    }

    return {
        start: start,
        stop: stop,
        split: split,
        reset: reset
    };

}());

////////////////////TIMER//////////////////

var Timer = function() {
    var totalTime = 0,
        startingTime = 0,
        timeDiff = 0,
        timerId, //timer id used for clearing
        running, //flag used to check whether the timer is running
        started; //flag used to check whether timer was started


    function run() {
        startingTime = new Date();
        started = true;
        running = true;
        timerId = setInterval(function() {
            timeDiff = new Date() - startingTime;
            render.counter(timeDiff + totalTime);
        }, 1);
    }


    function stop() {
        if (!running) {
            return;
        } // only running process could be stopped

        clearInterval(timerId);
        running = false;
        totalTime += timeDiff;

        render.results('stop ', timeDiff);
    }


    function split() {
        if (!running) {
            return;
        }
        render.results('split', timeDiff);
    }


    function reset() {
        if (!started) {
            return;
        }
        clearInterval(timerId);
        totalTime = 0;
        startingTime = 0;
        running = false;
        started = false;
        render.clear();
    }

    return {
        run: run,
        stop: stop,
        split: split,
        reset: reset
    };

};


////////////////////////////////////RENDER/////////////////////////////


let render = (function() {

    let resultCounter = 0,
        counterTime = document.getElementsByClassName('counter__time')[0],
        counterResults = document.getElementsByClassName('counter__results')[0];


    function _counter(counter) {
        counterTime.innerHTML = _formatCounter(counter);
    }

    function _results(type, counter) {
        counterResults.innerHTML += '<tr class="results__item"><td>' + (++resultCounter) + '</td><td> ' + type + ': </td><td>' + _formatCounter(counter) + '</td></tr>';
    }

    function _clear() {
        counterTime.innerHTML = '00:00:00.000';
        if (counterResults) {
            counterResults.innerHTML = "";
        }
        resultCounter = 0;
    }

    function _formatCounter(counter) {
        let time = new Date(counter);
        return time.toJSON().substr(11, 12);
    }

    return {
        counter: _counter,
        results: _results,
        clear: _clear
    };
}());



// var render = {
//     resultCounter: 0,
//
//     counter: function(counter) {
//         this.counterTime = document.getElementsByClassName('counter__time')[0];
//         this.counterTime.innerHTML = formatCounter(counter);
//     },
//
//     results: function(type, counter) {
//         this.counterResults = document.getElementsByClassName('counter__results')[0];
//         var row = document.createElement('tr');
//         row.className = 'results__item';
//         row.innerHTML = '<td>' + (++this.resultCounter) + '</td><td> ' + type + ': </td><td>' + formatCounter(counter) + '</td>';
//         this.counterResults.appendChild(row);
//     },
//
//     clear: function() {
//         this.counterTime.innerHTML = '00:00:00.000';
//         if (this.counterResults) {
//             this.counterResults.innerHTML = "";
//         };
//         this.resultCounter = 0;
//
//     }
// };
