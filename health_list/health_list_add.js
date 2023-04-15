const counterValue = document.querySelector(".counter_value");
const counterUp = document.querySelector(".counter_button_up");
const counterDown = document.querySelector(".counter_button_down");
const beforeFileInput = document.querySelector("#beforeFileInput");
beforeFileInput.addEventListener("change", beforeImgHandler);
const afterFileInput = document.querySelector("#afterFileInput");
afterFileInput.addEventListener("change", afterImgHandler);

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

function beforeImgHandler(e) {
  const reader = new FileReader();
  const file = e.target.files[0];
  reader.readAsDataURL(file);
  reader.onload = function () {
    const img = document.querySelector(".health_img_before img");
    img.src = reader.result;
    const box = document.querySelector(".health_img_before");
    box.classList.add("active");
  };
}

function afterImgHandler(e) {
  const reader = new FileReader();
  const file = e.target.files[0];
  reader.readAsDataURL(file);
  reader.onload = function () {
    const img = document.querySelector(".health_img_after img");
    img.src = reader.result;
    const box = document.querySelector(".health_img_after");
    box.classList.add("active");
  };
}
