document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    button.nextElementSibling.classList.toggle("show");
  });
});
