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

var actionHandler = {
    start: function() {
        if (!this.timer) {
            this.timer = new Timer();
        }
        if (!this.timer.running) {
            this.timer.run();
            var btn = event.target;
            btn.setAttribute('data-action', 'stop');
            btn.innerHTML = "stop";
        }
    },

    stop: function() {
        if (this.timer) {
            this.timer.stop();
            var btn = event.target;
            btn.setAttribute('data-action', 'start');
            btn.innerHTML = "start";
        }
    },

    split: function() {
        if (this.timer) {
            this.timer.split();
        }
    },


    reset: function() {
        if (this.timer) {
            this.timer.reset();

            var btn = event.target;
            var btnStartStop = btn.parentNode.firstElementChild;
            var btnStartStopAction = btnStartStop.getAttribute('data-action');

            if (btnStartStopAction === 'stop') {
                btnStartStop.setAttribute('data-action', 'start');
                btnStartStop.innerHTML = "start";
            }

        }
    }
}




////////////////////TIMER//////////////////

var Timer = function() {
    var counter = 0; //current counter value
    var lastCounter = 0; //last counter value
    var timerId; //timer id used for clearing
    var running; //flag used to check whether the timer is running
    var started; //flag used to check whether timer was started


    this.run = function() {
        timerId = setInterval(function() {
            started = true;
            running = true;
            counter++;
            render.counter(counter);
        }, 1);
    }

    this.stop = function() {
        if (!running) {
            return;
        } // only running process could be stopped

        clearInterval(timerId);
        running = false;

        render.results('stop ', counter - lastCounter);
        lastCounter = counter; //new value of starting time
    };


    this.split = function() {
        if (!running) {
            return;
        }
        render.results('split', counter - lastCounter);
    };


    this.reset = function() {
        if (!started) {
            return;
        }
        clearInterval(timerId);
        counter = 0;
        lastCounter = 0;
        running = false;
        started = false;
        render.clear();

    }



};


////////////////////////////////////RENDER/////////////////////////////


var render = {
    resultCounter: 0,
    counter: function(counter) {
        this.counterTime = document.getElementsByClassName('counter__time')[0];
        this.counterTime.innerHTML = formatCounter(counter);
    },
    clear: function() {
        this.counterTime.innerHTML = '00:00:00.000';
        this.counterResults.innerHTML = "";
        this.resultCounter = 0;

    },
    results: function(type, counter) {
        this.counterResults = document.getElementsByClassName('counter__results')[0];
        var row = document.createElement('tr');
        div.className = 'results__item';
        div.innerHTML = '<td>' + (++this.resultCounter) + '</td><td> ' + type + ': </td><td>' + formatCounter(counter) + '</td>';
        this.counterResults.appendChild(row);

    }
};



function formatCounter(counter) {
    var time = new Date(counter);

    var hour = addLeadingZeros(time.getUTCHours(time), 2);
    var min = addLeadingZeros(time.getMinutes(time), 2);
    var sec = addLeadingZeros(time.getSeconds(time), 2);
    var ms = addLeadingZeros(time.getMilliseconds(time), 3);

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
