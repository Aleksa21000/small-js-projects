class Accordion {
  constructor(el) {
    this.el = el;
    this.accTop = this.el.querySelector(".js-acc-top");
    this.acBottom = this.el.querySelector(".js-acc-bottom");
    this.acBottomInner = this.el.querySelector(".js-acc-inner");

    this.initEvents();
  }

  initEvents() {
    this.accTop.addEventListener("click", () => {
      this.closeAllOther();
      if (!this.el.classList.contains("open")) {
        this.open();
      } else {
        this.close();
      }
    });
  }

  open() {
    this.el.classList.add("open");
    const innerHeight = this.acBottomInner.getBoundingClientRect().height;
    this.acBottom.style.height = `${innerHeight}px`;
  }

  close() {
    this.el.classList.remove("open");
    this.acBottom.style.height = "0px";
  }

  closeAllOther() {
    accordionInstances.forEach((acc) => {
      if (acc != this) {
        acc.close();
      }
    });
  }
}

const elements = document.querySelectorAll(".js-acc");
const accordionInstances = [];

elements.forEach((el) => {
  const acc = new Accordion(el);
  accordionInstances.push(acc);
});
