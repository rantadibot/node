const weatherElement = document.querySelector("#weather");
setTimeout(() => {
  weatherElement.innerHTML = " 내일 기온은 <strong>24도</strong>가 예상됩니다";
}, 3000);

setTimeout(() => {
  weatherElement.innerHTML = "모레 기온이 <strong>27도</strong>가 예상됩니다";
}, 9000);
