const itemsByCategory = document.querySelectorAll(".item");
console.log("Number of categories:", itemsByCategory.length);

itemsByCategory.forEach((e) => {
  const title = e.querySelector("h2").innerHTML;
  console.log("Category:", title);
  const elements = e.querySelectorAll("ul>li");
  console.log("Elements:", elements.length);
});
