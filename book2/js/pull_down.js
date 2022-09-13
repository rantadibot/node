const prefList = [
  { value: "02", name: "서울" },
  { value: "044", name: "세종" },
  { value: "032", name: "인천" },
  { value: "051", name: "부산" },
  { value: "053", name: "대구" },
  { value: "042", name: "대전" },
  { value: "062", name: "광주" },
  { value: "052", name: "울산" },
];
const log = document.querySelector(".log");
const selectElement = document.querySelector("#pref");
let optionString = `<option value="">선택하세요</option>`;
prefList.forEach((item) => {
  optionString += `<option value="${item.value}">${item.name}</option>`;
});
selectElement.innerHTML = optionString;

selectElement.addEventListener("change", (event) => {
  const value = event.target.value;
  const msg =
    value === ""
      ? "지역이 선택되지 않았습니다"
      : `선택된 지역 지역번호는 ${value}입니다`;
  log.innerHTML = msg;
});
