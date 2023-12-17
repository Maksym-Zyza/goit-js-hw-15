const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.addEventListener("input", handlerTextSize);

function handlerTextSize() {
  span.style.fontSize = `${input.value}px`;
}
