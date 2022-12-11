let counterValue = 0;
const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const showValue = document.querySelector("#value");


plusBtn.addEventListener("click", () => {
    counterValue += 1;
    showValue.textContent = counterValue
});

minusBtn.addEventListener("click", () => {
  counterValue -= 1;
  showValue.textContent = counterValue;
});