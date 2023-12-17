const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
let counter = 0;

createBtn.addEventListener("click", handlerCreate);
destroyBtn.addEventListener("click", handlerDestroy);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function handlerCreate() {
  const number = Number(input.value);
  if (number < 1) {
    alert("Enter a number greater than 1");
    return;
  }
  createBoxes(number);
}

function createBoxes(amount) {
  const markup = [];
  for (let i = 1; i <= amount; i += 1) {
    const startValue = !counter ? 20 : counter * 10 + 20;
    const value = startValue + i * 10;
    const color = getRandomHexColor();
    markup.push(
      `<div style="width: ${value}px; height: ${value}px; background-color: ${color}"></div>`
    );
  }
  counter += amount;
  boxes.insertAdjacentHTML("beforeend", markup.join(""));
}

function handlerDestroy() {
  counter = 0;
  input.value = "";
  boxes.innerHTML = "";
}
