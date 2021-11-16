const acoordion = document.querySelectorAll(".js-acc");

acoordion.forEach((acc) => {
  const accTop = acc.querySelector(".js-acc-top");
  const accBottom = acc.querySelector(".js-acc-bottom");
  const accBottomInner = acc.querySelector(".js-acc-inner");
  accTop.addEventListener("click", () => {
    if (acc.classList.contains("open")) {
      acc.classList.remove("open");
      accBottom.style.height = "0px";
    } else {
      acc.classList.add("open");
      const innerHeight = accBottomInner.getBoundingClientRect().height;
      accBottom.style.height = `${innerHeight}px`;
    }
  });
});
