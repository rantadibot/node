const element = document.querySelector("form#radioGroup");

element.addEventListener("change", (event) => {
  const drinkValue = element.drink.value;
  const fruitValue = element.fruit.value;
  console.log(`음료수는 ${drinkValue}입니다`);
  console.log(`과일은 ${fruitValue}입니다`);
});
