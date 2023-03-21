function startTimer() {
  min = 1;
  if (min === "") min = 0;
  sec = 30;
  if (sec === "") sec = 0;
  timer = setInterval(counterTimer, 1000);
}

function counterTimer() {
  if (sec != 0) {
    sec--;
    document.querySelector("#display").innerText = min + ":" + sec;
  } else {
    if (min != 0) {
      min--;
      sec = 60;
    } else {
      clearTimer(timer, "타이머 종료");
    }
  }
}

function resetTimer() {
  clearTimer(timer, "리셋 종료");
}

function clearTimer(t, text) {
  clearInterval(t);
  document.querySelector(".min").value = "";
  document.querySelector(".sec").value = "";
}
