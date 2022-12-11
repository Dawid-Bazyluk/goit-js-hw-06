let counterValue = 0;
const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const showValue = document.querySelector("#value");
const increment = () => {
  counterValue += 1;
  showValue.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  showValue.textContent = counterValue;
};





plusBtn.addEventListener("click", increment);

minusBtn.addEventListener("click", decrement );