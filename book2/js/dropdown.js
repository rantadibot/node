const element = document.querySelector("select#mySelect");
const submit = document.querySelector(".submit");
submit.addEventListener("click", (event) => {
  const value = element.value;
  const log = `선택된 과일은 ${value}입니다`;
  document.querySelector("p.log").innerHTML = log;
});
