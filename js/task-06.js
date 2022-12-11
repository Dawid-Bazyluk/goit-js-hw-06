const input = document.querySelector("#validation-input");
const inputLength = input.dataset.length;
const focus = () => {
  if (input.value.length == inputLength) {
    input.setAttribute("class", "valid");
  } else {
    input.setAttribute("class", "invalid");
  }
};

input.addEventListener("blur", focus);
