const categories = document.querySelectorAll(".item");
const totalCategories = categories.length;
console.log("Number of categories:", totalCategories);

categories.forEach((item) => {
  const title = item.children[0];
  console.log("Category:", title.innerHTML);

  const element = item.children[1].children;
  console.log("Elements:", element.length);
});
