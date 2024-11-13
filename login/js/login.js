const passwordInput = document.querySelector("#password");

const recoverButton = document.querySelector("#recover");
const loginButton = document.querySelector("#login");

loginButton.addEventListener("click", loginHandler);

function getFormData() {
  email = emailInput.value;
  password = passwordInput.value;
  return { email, password };
}

function loginHandler(event) {
  const data = getFormData();
  console.log(data);
}
