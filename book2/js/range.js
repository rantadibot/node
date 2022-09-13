const element = document.querySelector("#myRange");
const element2 = document.querySelector("#myColor");
const log = document.querySelector("p.log");
const log2 = document.querySelector("p.log2");
element.addEventListener("input", handleChange);
function handleChange(event) {
  const value = event.target.value;
  const msg = `현재 값은 ${value}입니다`;
  log.innerHTML = msg;
}
element2.addEventListener("change", handleColor);
function handleColor(event) {
  const value2 = event.target.value;
  const msg2 = `${value2}색상이 설정되었습니다`;
  log2.innerHTML = msg2;
  log2.style.backgroundColor = value2;
}
