const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((e) => {
  const element = document.createElement("li");
  element.textContent = e;
  list.append(element);
  element.classList.add("item");
});
