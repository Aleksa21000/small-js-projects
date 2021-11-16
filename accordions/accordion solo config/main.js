const acoordions = document.querySelectorAll(".js-acc");

acoordions.forEach((acc, index) => {
  const accTop = acc.querySelector(".js-acc-top");

  accTop.addEventListener("click", () => {
    acoordions.forEach((ac, i) => {
      const acBottom = ac.querySelector(".js-acc-bottom");
      const acBottomInner = ac.querySelector(".js-acc-inner");
      if (index === i && !ac.classList.contains("open")) {
        ac.classList.add("open");
        const innerHeight = acBottomInner.getBoundingClientRect().height;
        acBottom.style.height = `${innerHeight}px`;
      } else {
        ac.classList.remove("open");
        acBottom.style.height = "0px";
      }
    });
  });
});
