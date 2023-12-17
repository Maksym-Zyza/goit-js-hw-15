const input = document.querySelector("#validation-input");
const dataLength = input.dataset.length;
input.addEventListener("blur", handlerValidation);

function handlerValidation(e) {
  if (!e.currentTarget.value) {
    input.classList.remove("valid");
    input.classList.remove("invalid");
    return;
  }

  if (e.currentTarget.value.length === Number(dataLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
