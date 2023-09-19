  const inputHours = document.querySelector('.hrs');
  const inputMinutes = document.querySelector('.min');
  const inputSeconds = document.querySelector('.sec');
  const startButton = document.querySelector('.btn-start');
  const resetButton = document.querySelector('.btn-reset');
  const hoursDisplay = document.getElementById('hoursDisplay');
  const minutesDisplay = document.getElementById('minutesDisplay');
  const secondsDisplay = document.getElementById('secondsDisplay');

  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let isRunning = false;
  let timer;

  function updateTime() {
    hoursDisplay.textContent = String(hours).padStart(2, '0');
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  }

  function startTimer() {
    if (!isRunning) {
      hours = parseInt(inputHours.value) || 0;
      minutes = parseInt(inputMinutes.value) || 0;
      seconds = parseInt(inputSeconds.value) || 0;

      if (hours === 0 && minutes === 0 && seconds === 0) {
        return;
      }

      isRunning = true;
      startButton.textContent = 'PAUSE';
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(timer);
              alert('타이머가 종료되었습니다.');
              isRunning = false;
              startButton.textContent = 'START';
              return;
            }
            hours--;
            minutes = 59;
          } else {
            minutes--;
          }
          seconds = 59;
        } else {
          seconds--;
        }
        updateTime();
      }, 1000);
    } else {
      clearInterval(timer);
      isRunning = false;
      startButton.textContent = 'START';
    }
  }

  function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    startButton.textContent = 'START';
    inputHours.value = '';
    inputMinutes.value = '';
    inputSeconds.value = '';
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTime();
  }

  inputHours.addEventListener('input', () => {
    hours = parseInt(inputHours.value) || 0;
    updateTime();
  });

  inputMinutes.addEventListener('input', () => {
    minutes = parseInt(inputMinutes.value) || 0;
    updateTime();
  });

  inputSeconds.addEventListener('input', () => {
    seconds = parseInt(inputSeconds.value) || 0;
    updateTime();
  });

  startButton.addEventListener('click', startTimer);
  resetButton.addEventListener('click', resetTimer);
  updateTime();

