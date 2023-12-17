const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");
const list = document.createElement("li");

const listItems = ingredients.map((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.className = item;
  return listItem;
});
ingredientsList.append(...listItems);
console.log(ingredientsList.innerHTML);
