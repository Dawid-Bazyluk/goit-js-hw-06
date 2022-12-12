const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = slider.value + "px";

const changeSize = () => {
  const currentSize = slider.value;
  text.style.fontSize = currentSize + "px";
};

slider.addEventListener("input", changeSize);
