const input = document.querySelector(".form__input");
const erro = document.querySelector(".form__error");
const btnSubmit = document.querySelector(".form__button");
erro.style.visibility = "hidden";

input.addEventListener("blur", () => {
  if (parseFloat(input.value) < 0 || isNaN(parseFloat(input.value))) {
    erro.style.visibility = "visible";
    btnSubmit.disabled = true;
  } else {
    erro.style.visibility = "hidden";
    btnSubmit.disabled = false;

  }
});
