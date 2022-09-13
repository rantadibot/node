const themeDark = document.querySelector(".theme-dark");
const themeBody = document.querySelector(".theme");

themeDark.addEventListener("click", () => {
  document.body.classList.toggle("theme-dark");
  if (document.body.classList.value === "theme-dark") {
    themeBody.innerHTML = "다크 모드 ON";
  } else {
    themeBody.innerHTML = "다크 모드 OFF";
  }
});
