const timer = document.querySelector(".timer");
const timerButton = document.querySelector(".push_up_button");
const pushUpImg = document.querySelector(".push_up_img");
const attetion = document.querySelector(".attetion");
const severalTime = document.querySelector(".several_time");

severalTime.innerHTML = timerButton.addEventListener("click", () => {
  if (!timerButton.classList.contains("active")) {
    severalTime.innerHTML = count + "개!";
    startTimer();
    pushUpImg.src = "/img/push-up-active.gif";
    attetion.innerHTML = "아직 멀었어!";
    severalCount();
    timerButton.innerHTML = "완료";
    timerButton.classList.add("active");
  } else {
    saveRecord();
    stopTimer();
    timerButton.classList.remove("active");
    timerButton.innerHTML = "시작";
    pushUpImg.src = "/img/22917-pushup 1.png";
    attetion.innerHTML = "최고 기록";

    if (count > bestRecord) {
      bestRecord = count;
      localStorage.setItem("bestRecord", bestRecord);
    }
  }
});

let count = 0;

const severalCount = () => {
  countInterval = setInterval(function () {
    count++;
    severalTime.innerHTML = count + "개!";
  }, 5000);
};

let min = 0;
let sec = 0;

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

    timer.innerHTML = timerCount;
  }, 1000);
};
const stopTimer = () => {
  clearInterval(interval);
  clearInterval(countInterval);
  sec = 0;
  min = 0;
  count = 0;
  timer.innerHTML = "00:00";
};
const saveRecord = () => {
  localStorage.setItem("bestRecord", count);
};
const bestRecord = localStorage.getItem("bestRecord");

if (!bestRecord) {
  severalTime.innerHTML = "최고기록 없음";
} else {
  severalTime.innerHTML = bestRecord + "개";
}
