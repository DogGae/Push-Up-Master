const exerciseListContainer = document.querySelector(".item-containers");

const getExerciseList = () => {
  const storedData = localStorage.getItem("saveData");
  if (storedData) {
    return JSON.parse(storedData);
  }
};

const displayExercise = () => {
  const exerciseList = getExerciseList();

  if (!exerciseList || exerciseList.length === 0) {
    const emptyItem = document.createElement("div");
    emptyItem.classList.add("emptyList");
    emptyItem.innerText = `
    운동 리스트가 없습니다.
    `;
    exerciseListContainer.appendChild(emptyItem);
  } else {
    exerciseList.forEach((exercise) => {
      const exerciseContainer = document.createElement("div");
      exerciseContainer.classList.add("item-container");
      const exerciseItem = document.createElement("div");
      exerciseItem.classList.add("item");
      const bestRecord =
        exercise.bestRecord === undefined ? "없음" : `${exercise.bestRecord}`;
      exerciseItem.innerHTML = `
      <img class="healthimg" src="${exercise.beforeStartImage}" alt="${exercise.name}" />
      <div class="health-name">
        <div>${exercise.name}</div>
        <div class="bestrecord">최고기록:${bestRecord}</div>
      </div>
      <button class="remove_btn">
        <img class="remove" src="/img/Remove.png" alt="Remove" />
      </button>
    `;

      exerciseContainer.appendChild(exerciseItem);
      exerciseListContainer.appendChild(exerciseContainer);
    });
    const removeButton = document.querySelectorAll(".remove_btn");
    removeButton.forEach((button, index) => {
      button.addEventListener("click", (e) => {
        const itemContainer = e.target.closest(".item-container");
        itemContainer.remove();
        exerciseList.splice(index, 1);
        localStorage.setItem("saveData", JSON.stringify(exerciseList));
      });
    });
  }
};

displayExercise();
