const counterValue = document.querySelector(".counter_value");
const counterUp = document.querySelector(".counter_button_up");
const counterDown = document.querySelector(".counter_button_down");

counterUp.addEventListener("click", () => {
  let counter = parseInt(counterValue.innerText);
  if (counter < 10) {
    counterValue.innerText = counter + 1;
  }
});
counterDown.addEventListener("click", () => {
  let counter = parseInt(counterValue.innerText);
  if (counter > 1) {
    counterValue.innerText = counter - 1;
  }
});
