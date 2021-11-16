const buttons = document.querySelectorAll(".js-button");
const modals = document.querySelectorAll(".js-modal");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modals[index].classList.add("open");
  });
});

modals.forEach((modal) => {
  const bg = modal.querySelector(".js-modal-bg");

  bg.addEventListener("click", () => {
    modal.classList.remove("open");
  });
});
