"use strict";

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".btn-next");
const prev = document.querySelector(".btn-prev");
const dots = document.querySelectorAll(".dot");

// Mouse events
slider.addEventListener('mousedown', dragStart);
window.addEventListener('mousemove', dragMove);
window.addEventListener('mouseup', dragEnd);

slider.addEventListener('touchstart', dragStart);
window.addEventListener('touchmove', dragMove);
window.addEventListener('touchend', dragEnd);


let activeIndex = 0;

const setActiveSlide = () => {
  slides.forEach((slide, index) => {
    if (activeIndex === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
  dots.forEach((dot, index) => {
    if (activeIndex === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

const slideLeft = () => {
  activeIndex--;
  if (activeIndex < 0) activeIndex = slides.length - 1;
  setActiveSlide();
};

const slideRight = () => {
  activeIndex++;
  if (activeIndex > slides.length - 1) activeIndex = 0;
  setActiveSlide();
};

// Button right
next.addEventListener("click", function () {
  slideRight();
});

// Button left
prev.addEventListener("click", function () {
  slideLeft();
});

// Mouse move events
let dragging = false;
let startPosition = 0;

function dragStart(e) {
  dragging = true;
  startPosition = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function dragMove(e) {
  if (!dragging) return;
  let currentPosition = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  if (currentPosition - startPosition > 100) {
    slideRight();
    dragging = false;
  } else if (currentPosition - startPosition < -100) {
    slideLeft();
    dragging = false;
  }
}

function dragEnd(){
  dragging = false;
}

// Dots event
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    if(activeIndex !== index) {
      activeIndex = index;
      setActiveSlide();
    }
  });
});