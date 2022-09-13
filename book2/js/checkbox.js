const log = document.querySelector(".log");
const cbA = document.querySelector("#cbA");
const cbB = document.querySelector("#cbB");
const cbC = document.querySelector("#cbC");

cbA.addEventListener("change", (event) => {
  const value = event.target.checked;
  const msg = `체크박스 A는 ${value}로 변경되었습니다`;
  log.innerHTML = msg;
});

cbB.addEventListener("change", (event) => {
  const value = event.target.checked;
  const msg = `체크박스 B는 ${value}로 변경되었습니다`;
  log.innerHTML = msg;
});

cbC.addEventListener("change", (event) => {
  const value = event.target.checked;
  const msg = `체크박스 C는 ${value}로 변경되었습니다`;
  log.innerHTML = msg;
});
