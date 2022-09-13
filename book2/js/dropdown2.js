const element = document.querySelector("select#mySelect");
const log = document.querySelector("p.log");
element.addEventListener("change", handleChange);
function handleChange(event) {
  const value = element.value;
  const msg = `선택된 과일은 ${value}입니다`;
  log.innerHTML = msg;
}
