const counterValue = document.querySelector(".counter_value");
const counterUp = document.querySelector(".counter_button_up");
const counterDown = document.querySelector(".counter_button_down");
const beforeFileInput = document.querySelector("#beforeFileInput");
beforeFileInput.addEventListener("change", beforeImgHandler);
const afterFileInput = document.querySelector("#afterFileInput");
const beforeImg = document.querySelector(".before_img");
const afterImg = document.querySelector(".after_img");
afterFileInput.addEventListener("change", afterImgHandler);
const confirmButton = document.querySelector(".accept_button");
const progressPhrase = document.querySelector(".progressive_phrase");

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

confirmButton.addEventListener("click", () => {
  const exerciseName = window.prompt("이름을 입력하세요");
  const confirmed = window.confirm("운동을 추가하시겠습니까?");

  if (confirmed) {
    const data = {
      name: exerciseName,
      beforeStartImage: beforeImg.src,
      afterStartVideo: afterImg.src,
      progressPhrase: progressPhrase.value,
      secondsPerCount: counterValue.textContent,
      id: Date.now(),
    };
    const saveToLocalStorage = (data) => {
      localStorage.setItem("saveData", JSON.stringify(data));
    };
    const storedData = JSON.parse(localStorage.getItem("saveData")) || [];
    storedData.push(data);
    saveToLocalStorage(storedData);
    console.log(storedData);
  }
});
