const timer = document.querySelector(".timer");
const timerButton = document.querySelector(".push_up_button");

timerButton.addEventListener("click", () => {
  startTimer();
});

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
