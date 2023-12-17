const form = document.querySelector(".login-form");
const formBtn = document.querySelector(".submit");
form.addEventListener("submit", handlerForm);

function handlerForm(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  const data = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  if (data.email === "" || data.password === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }
  console.log(data);
  e.currentTarget.reset();
}
