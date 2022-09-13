document
  .querySelector("#create-modal")
  .addEventListener("click", displayModalWindow);

document
  .querySelector("#create-modal2")
  .addEventListener("click", displayModalWindow2);
document
  .querySelector("#create-modal3")
  .addEventListener("click", displayModalWindow3);
document
  .querySelector("#create-modal4")
  .addEventListener("click", displayModalWindow4);
document
  .querySelector("#create-modal5")
  .addEventListener("click", displayModalWindow5);
document
  .querySelector("#create-modal6")
  .addEventListener("click", displayModalWindow6);
function displayModalWindow() {
  const modalElement = document.createElement("div");
  modalElement.classList.add("modal");

  const innerElement = document.createElement("div");
  innerElement.classList.add("inner");
  innerElement.innerHTML = `<p><img src='https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg' width="400"></p>
  <div class="charcter"></div>`;
  modalElement.appendChild(innerElement);
  document.body.appendChild(modalElement);

  innerElement.addEventListener("click", () => {
    closeModalWindow(modalElement);
  });
}

function displayModalWindow2() {
  const modalElement = document.createElement("div");
  modalElement.classList.add("modal");

  const innerElement = document.createElement("div");
  innerElement.classList.add("inner");
  innerElement.innerHTML = `<p><img src='https://img.sbs.co.kr/newsnet/etv/upload/2022/01/13/30000736829_1280.jpg' width="400"></p>
    <div class="charcter"></div>`;
  modalElement.appendChild(innerElement);
  document.body.appendChild(modalElement);

  innerElement.addEventListener("click", () => {
    closeModalWindow(modalElement);
  });
}

function displayModalWindow3() {
  const modalElement = document.createElement("div");
  modalElement.classList.add("modal");

  const innerElement = document.createElement("div");
  innerElement.classList.add("inner");
  innerElement.innerHTML = `<p><img src='https://image.mycelebs.com/celeb/new/sq/755_sq_1645171955.jpg
    ' width="400"></p>
      <div class="charcter"></div>`;
  modalElement.appendChild(innerElement);
  document.body.appendChild(modalElement);

  innerElement.addEventListener("click", () => {
    closeModalWindow(modalElement);
  });
}

function displayModalWindow4() {
  const modalElement = document.createElement("div");
  modalElement.classList.add("modal");

  const innerElement = document.createElement("div");
  innerElement.classList.add("inner");
  innerElement.innerHTML = `<p><img src='https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=20171004003432026140cc1df6cba18221588118.jpg
      ' width="400"></p>
        <div class="charcter"></div>`;
  modalElement.appendChild(innerElement);
  document.body.appendChild(modalElement);

  innerElement.addEventListener("click", () => {
    closeModalWindow(modalElement);
  });
}

function displayModalWindow5() {
  const modalElement = document.createElement("div");
  modalElement.classList.add("modal");

  const innerElement = document.createElement("div");
  innerElement.classList.add("inner");
  innerElement.innerHTML = `<p><img src='https://mblogthumb-phinf.pstatic.net/MjAyMTA1MjFfMTIw/MDAxNjIxNTg5MTQzOTE4.tKz7TiKE8dwTq0P6uhIiXZUAaIQsZVzMRzv2JrscehQg.hEm2vWox78JVCMzHa1kIE62u-qsStbV3JzMNrj5u5_kg.JPEG.baemju/IMG_3537.JPG?type=w800
      ' width="400"></p>
        <div class="charcter"></div>`;
  modalElement.appendChild(innerElement);
  document.body.appendChild(modalElement);

  innerElement.addEventListener("click", () => {
    closeModalWindow(modalElement);
  });
}

function displayModalWindow6() {
  const modalElement = document.createElement("div");
  modalElement.classList.add("modal");

  const innerElement = document.createElement("div");
  innerElement.classList.add("inner");
  innerElement.innerHTML = `<p><img src='https://www.daejonilbo.com/news/photo/202008/1435895_319418_1447.jpg
        ' width="400"></p>
          <div class="charcter"></div>`;
  modalElement.appendChild(innerElement);
  document.body.appendChild(modalElement);

  innerElement.addEventListener("click", () => {
    closeModalWindow(modalElement);
  });
}

function closeModalWindow(modalElement) {
  document.body.removeChild(modalElement);
}
