const pomodoroCountdownDiv = document.querySelector("#pomodoro-countdown");
const pomodoroStartBtn = document.querySelector("#pomodoro-start-btn");
const pomodoroStopBtn = document.querySelector("#pomodoro-stop-btn");
const pomodoroResetBtn = document.querySelector("#pomodoro-reset-btn");
const pomodoroNavBtn = document.querySelector("#pomodoro-nav-btn");
const pomodoroCurrentSession = document.querySelector(
  "#pomodoro-current-session",
);
const pomodoroShortBreaktBtn = document.querySelector(
  "#pomodoro-short-break-btn",
);

let timer = 1500;
let pomodoroInterval;
let currentTab = "pomodoro";

function timerCountdown() {
  pomodoroInterval = setInterval(() => {
    timer = timer - 1;
    let min = Math.floor(timer / 60);
    let sec = timer % 60;

    pomodoroCountdownDiv.innerHTML = `${min}:${sec}`;

    if (timer <= 0) {
      clearInterval(pomodoroInterval);
      timer = 300;
      pomodoroCountdownDiv.innerHTML = `5:00`;
      pomodoroCurrentSession.innerHTML = "Break Time";
      alert("Work session is done! Now it's break time");
      timerCountdown();
    }
  }, 1000);
}

pomodoroStartBtn.addEventListener("click", () => {
  clearInterval(pomodoroInterval);
  timerCountdown();
});

pomodoroStopBtn.addEventListener("click", () => {
  clearInterval(pomodoroInterval);
});

pomodoroResetBtn.addEventListener("click", () => {
  clearInterval(pomodoroInterval);
  if (currentTab === "pomodoro") {
    timer = 1500;
    pomodoroCountdownDiv.innerHTML = `25:00`;
    pomodoroCurrentSession.innerHTML = "Work Session";
  } else {
    timer = 300;
    pomodoroCountdownDiv.innerHTML = `5:00`;
    pomodoroCurrentSession.innerHTML = "Break Time";
  }
});

pomodoroShortBreaktBtn.addEventListener("click", () => {
  clearInterval(pomodoroInterval);
  timer = 300;
  pomodoroCountdownDiv.innerHTML = `5:00`;
  currentTab = "break";
  pomodoroCurrentSession.innerHTML = "Break Time";
});

pomodoroNavBtn.addEventListener("click", () => {
  clearInterval(pomodoroInterval);
  timer = 1500;
  pomodoroCountdownDiv.innerHTML = `25:00`;
  currentTab = "pomodoro";
  pomodoroCurrentSession.innerHTML = "Work Session";
});
