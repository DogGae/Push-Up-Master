const timer = document.querySelector(".timer");
const timerButton = document.querySelector(".push_up_button");

timerButton.addEventListener("click", () => {
  startTimer();
});

let min = 0;
let sec = 0;

startTimer = () => {
  setInterval(function () {
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
    const timerCount = `${min < 10 ? "0" + min : min}:${
      sec < 10 ? "0" + sec : sec
    }`;
    timer.innerHTML = timerCount;
  }, 1000);
};
