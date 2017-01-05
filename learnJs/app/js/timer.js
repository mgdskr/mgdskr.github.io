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

    function _start() {
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

    function _stop() {
        if (timer) {
            timer.stop();
            var btn = event.target;
            btn.setAttribute('data-action', 'start');
            btn.innerHTML = "start";
        }
    }

    function _split() {
        if (timer) {
            timer.split();
        }
    }


    function _reset() {
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
        start: _start,
        stop: _stop,
        split: _split,
        reset: _reset
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


    function _run() {
        startingTime = new Date();
        started = true;
        running = true;
        timerId = setInterval(function() {
            timeDiff = new Date() - startingTime;
            render.counter(timeDiff + totalTime);
        }, 1);
    }


    function _stop() {
        if (!running) {
            return;
        } // only running process could be stopped

        clearInterval(timerId);
        running = false;
        totalTime += timeDiff;

        render.results('stop ', timeDiff);
    }


    function _split() {
        if (!running) {
            return;
        }
        render.results('split', timeDiff);
    }


    function _reset() {
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
        run: _run,
        stop: _stop,
        split: _split,
        reset: _reset
    };

};


////////////////////////////////////RENDER/////////////////////////////


var render = {
    resultCounter: 0,
    counter: function(counter) {
        this.counterTime = document.getElementsByClassName('counter__time')[0];
        this.counterTime.innerHTML = formatCounter(counter);
    },

    results: function(type, counter) {
        this.counterResults = document.getElementsByClassName('counter__results')[0];
        var row = document.createElement('tr');
        row.className = 'results__item';
        row.innerHTML = '<td>' + (++this.resultCounter) + '</td><td> ' + type + ': </td><td>' + formatCounter(counter) + '</td>';
        this.counterResults.appendChild(row);
    },

    clear: function() {
        this.counterTime.innerHTML = '00:00:00.000';
        this.counterResults.innerHTML = "";
        this.resultCounter = 0;

    }
};



function formatCounter(counter) {
    var time = new Date(counter),
        hour = addLeadingZeros(time.getUTCHours(time), 2),
        min = addLeadingZeros(time.getMinutes(time), 2),
        sec = addLeadingZeros(time.getSeconds(time), 2),
        ms = addLeadingZeros(time.getMilliseconds(time), 3);

    function addLeadingZeros(timeUnit, digitNum) {
        if (timeUnit < 10 && digitNum === 3) {
            return timeUnit = "00" + timeUnit;
        } else if (timeUnit < 10 && digitNum === 2 || timeUnit < 100 && digitNum === 3) {
            return timeUnit = "0" + timeUnit;
        } else {
            return timeUnit;
        }
    }

    return hour + ':' + min + ':' + sec + '.' + ms;

}
