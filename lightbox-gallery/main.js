const img_buttons = document.querySelectorAll(".js-modal-img");
const modal = document.querySelector(".js-modal");

const slider = modal.querySelector(".js-slider");
const slides = modal.querySelectorAll(".js-slide");
const next = modal.querySelector(".btn-next");
const prev = modal.querySelector(".btn-prev");
let activeIndex = 0;

const setActiveSlide = () => {
  slides.forEach(function (slide, index) {
    if (activeIndex === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
};

const slideLeft = function () {
  activeIndex--;
  if (activeIndex < 0) activeIndex = slides.length - 1;
  setActiveSlide();
};

const slideRight = function () {
  activeIndex++;
  if (activeIndex > slides.length - 1) activeIndex = 0;
  setActiveSlide();
};

img_buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    slides.forEach((slide, i) => {
      if (index == i) {
        slide.classList.add("active");
        modal.classList.add("open");
      } else {
        slide.classList.remove("active");
      }
    });
    activeIndex = index;
  });
});

const bg = modal.querySelector(".gallery-bg");
const closeBtns = modal.querySelectorAll(".close");

bg.addEventListener("click", function () {
  modal.classList.remove("open");
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
});

closeBtns.forEach(function (cBtn) {
  cBtn.addEventListener("click", function (e) {
    modal.classList.remove("open");
    slides.forEach(function (slide) {
      slide.classList.remove("active");
    });

    e.preventDefault();
  });
});

// Button right
next.addEventListener("click", function () {
  slideRight();
});

// Button left
prev.addEventListener("click", function () {
  slideLeft();
});

let dragging = false;
let startPosition = 0;

function dragStart(e) {
  dragging = true;
  startPosition = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
}

function dragMove(e) {
  if (!dragging) return;
  let currentPosition = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  if (currentPosition - startPosition > 100) {
    slideLeft();
    dragging = false;
  } else if (currentPosition - startPosition < -100) {
    slideRight();
    dragging = false;
  }
}

function dragEnd() {
  dragging = false;
}

// Mouse events
slider.addEventListener("mousedown", dragStart);
window.addEventListener("mousemove", dragMove);
window.addEventListener("mouseup", dragEnd);

// Touch events
slider.addEventListener("touchstart", dragStart);
window.addEventListener("touchmove", dragMove);
window.addEventListener("touchend", dragEnd);
