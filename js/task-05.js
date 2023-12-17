const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  span.textContent = e.target.value ? e.target.value : "Anonymous";
});
