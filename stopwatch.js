let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

function startStop() {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStopBtn').innerText = 'Parar';
        isRunning = true;
    } else {
        clearInterval(timer);
        document.getElementById('startStopBtn').innerText = 'Iniciar';
        isRunning = false;
    }
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    document.getElementById('display').innerText =
        `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

function reset() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    document.getElementById('display').innerText = '00:00:00';
    document.getElementById('startStopBtn').innerText = 'Iniciar';
    isRunning = false;
}
