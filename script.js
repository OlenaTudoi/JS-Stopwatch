const startBtn = document.getElementById('btn-start');
const stopBtn = document.getElementById('btn-stop');
const resetBtn = document.getElementById('btn-reset');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
let min = 0;
let sec = 0;
let interval = 0;

startBtn.addEventListener('click', startButtonHandler);
stopBtn.addEventListener('click', stopButtonHandler);
resetBtn.addEventListener('click', resetButtonHandler);

function startButtonHandler() {
  clearInterval(interval);
  interval = setInterval(startTimer, 1000);
  startBtn.disabled = true;
}

function stopButtonHandler() {
  clearInterval(interval);
  startBtn.disabled = false;
}

function resetButtonHandler() {
  clearInterval(interval);
  min = 0;
  sec = 0;
  minutes.innerHTML = '00';
  seconds.innerHTML = '00';
  startBtn.disabled = false;
}

function startTimer() {
  sec++;
  if (sec <= 9) {
    seconds.innerHTML = '0' + sec;
  } else if (sec > 9) {
    seconds.innerHTML = sec;
  }
  if (sec > 99) {
    min++;
    if (min <= 9) {
      minutes.innerHTML = '0' + min;
    } else {
      minutes.innerHTML = min;
    }
    sec = 0;
    seconds.innerHTML = '0';
  }
}
