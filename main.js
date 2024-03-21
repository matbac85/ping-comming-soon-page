const errorMessage = document.createElement("p");
const form = document.querySelector(".e-header__form");
const inputBlock = document.querySelector(".e-header__input-block");

inputBlock.appendChild(errorMessage);

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector("input[type='email']");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
      errorMessage.textContent =
        "Whoops! It looks like you forgot to add your email";
      emailInput.classList.add("e-header__input-error");
    } else if (!isValidEmail(emailValue)) {
      errorMessage.textContent = "Please provide a valid email address";
      emailInput.classList.add("e-header__input-error");
    } else {
      errorMessage.textContent = "";
      form.submit();
      return;
    }

    errorMessage.classList.add("e-header__error");
  });

  emailInput.addEventListener("focus", function () {
    emailInput.classList.remove("e-header__input-error");
    errorMessage.textContent = "";
    emailInput.value = "";
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
