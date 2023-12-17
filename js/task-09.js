const bodyRef = document.body;
const btn = document.querySelector(".change-color");
const text = document.querySelector(".color");
btn.addEventListener("click", handlerColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerColor() {
  const color = getRandomHexColor();
  text.innerHTML = color;
  bodyRef.style.backgroundColor = color;
}
