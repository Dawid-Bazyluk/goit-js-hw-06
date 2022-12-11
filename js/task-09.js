function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorBody = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const currentColorSpan = document.querySelector(".color");
const bgColor = "#fafafa ";
colorBody.style.backgroundColor = bgColor;
currentColorSpan.textContent = bgColor;

const changeColor = (event) => {
  const randomColor = getRandomHexColor();
  colorBody.style.backgroundColor = randomColor;
  currentColorSpan.textContent = randomColor;
};

btnChangeColor.addEventListener("click", changeColor);
