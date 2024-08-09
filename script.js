let timer;
let elapsedTime = 0;
let running = false;

function startStop() {
    if (!running) {
        startTimer();
    } else {
        stopTimer();
    }
}

function startTimer() {
    running = true;
    document.getElementById('startStopBtn').textContent = 'Stop';
    timer = setInterval(() => {
        elapsedTime += 10;
        updateTime();
    }, 10);
}

function stopTimer() {
    running = false;
    clearInterval(timer);
    document.getElementById('startStopBtn').textContent = 'Start';
}

function pause() {
    if (running) {
        stopTimer();
    }
}
function reset() {
    stopTimer();
    elapsedTime = 0;
    updateTime();
    document.getElementById('lapsList').innerHTML = '';
}

function lap() {
    const lapTime = document.getElementById('time').textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    document.getElementById('lapsList').appendChild(lapItem);
}

function updateTime() {
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / 60000);

    milliseconds = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    document.getElementById('time').textContent = `${minutes}:${seconds}:${milliseconds}`;
}
