const timer = document.querySelector(".timer");
const timerButton = document.querySelector(".push_up_button");
const pushUpImg = document.querySelector(".push_up_img");
const attetion = document.querySelector(".attetion");
const severalTime = document.querySelector(".several_time");

timerButton.addEventListener("click", () => {
  startTimer();
  pushUpImg.src = "/img/push-up-active.gif";
  attetion.innerHTML = "아직 멀었어!";
  severalCount();
  severalTime.innerHTML = count + "개!";
  timerButton.classList.add("active");
  timerButton.innerHTML = "완료";
});

let count = 0;

const severalCount = () => {
  setInterval(function () {
    count++;
    severalTime.innerHTML = count + "개!";
  }, 5000);
};

let min = 0;
let sec = 0;

const startTimer = () => {
  setInterval(function () {
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
