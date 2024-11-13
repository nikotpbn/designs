let timeout = setTimeout(function () {}, 0);

const emailInput = document.querySelector("#email");
emailInput.addEventListener("input", emailValidator);

function emailValidator(event) {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    const value = event.target.value;

    if (!value.includes("@") && value != "") {
      emailInput.classList.add("error");
      emailInput.classList.remove("highlight");
    } else {
      emailInput.classList.remove("error");
      emailInput.classList.add("highlight");
    }
  }, 500);
}
