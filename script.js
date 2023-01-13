const countDownText = document.querySelector("p");
const button = document.querySelector(".sub-bt");
const sendBt = document.querySelector(".send-bt");
const modal = document.querySelector("dialog");

const CountDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

button.addEventListener("click", () => {
  modal.showModal();
});

sendBt.addEventListener("click", () => {
  modal.close();
});

let countDown = setInterval(function () {
  let now = new Date().getTime();

  let distance = CountDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countDownText.innerText = `${("000" + days).slice(-3)} : ${("00" + hours).slice(-2)} : ${("00" + minutes).slice(-2)} : ${("00" + seconds).slice(-2)}`;

  if (distance < 0) {
    clearInterval(countDown);
    countDownText.innerText = `ACABOU`;
  }
}, 1000);
