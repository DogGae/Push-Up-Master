const timer = document.querySelector(".timer");
const timerButton = document.querySelector(".push_up_button");
const pushUpImg = document.querySelector(".push_up_img");
const attention = document.querySelector(".attention");
const severalTime = document.querySelector(".several_time");
let bestRecord = localStorage.getItem("bestRecord");

severalTime.innerText = timerButton.addEventListener("click", () => {
  if (!timerButton.classList.contains("active")) {
    severalTime.innerText = count + "개!";
    startTimer();
    severalCount();
    pushUpImg.src = "/img/push-up-active.gif";
    attention.innerText = "아직 멀었어!";
    timerButton.innerText = "완료";
    timerButton.classList.add("active");
  } else {
    saveRecord();
    stopTimer();
    timerButton.classList.remove("active");
    timerButton.innerText = "시작";
    pushUpImg.src = "/img/22917-pushup 1.png";
    attention.innerText = "최고 기록";

    severalTime.innerText = bestRecord + "개";
  }
});

let count = 0;
let countInterval;
const severalCount = () => {
  countInterval = setInterval(function () {
    count++;
    severalTime.innerText = count + "개!";
  }, 5000);
};

let min = 0;
let sec = 0;
let interval;
const startTimer = () => {
  interval = setInterval(function () {
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }

    if (min < 10) {
      timerCount = "0" + min;
    } else {
      timerCount = min;
    }

    if (sec < 10) {
      timerCount += ":" + "0" + sec;
    } else {
      timerCount += ":" + sec;
    }

    timer.innerText = timerCount;
  }, 1000);
};
const stopTimer = () => {
  clearInterval(interval);
  clearInterval(countInterval);
  sec = 0;
  min = 0;
  count = 0;
  timer.innerText = "00:00";
};
const saveRecord = () => {
  if (count > bestRecord) {
    bestRecord = count;
    localStorage.setItem("bestRecord", bestRecord);
  }
};

if (!bestRecord) {
  severalTime.innerText = "최고기록 없음";
} else {
  severalTime.innerText = bestRecord + "개";
}
