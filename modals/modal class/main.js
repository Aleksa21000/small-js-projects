class Modal {
  constructor(el) {
    this.el = el;
    this.btn = this.el.querySelectorAll('.js_btn');
    this.modal = this.el.querySelectorAll('.js_modal');

    this.initEvents();
  }

  initEvents() {
    this.open();
    this.close();
    this.closeOnLink();
  }

  open() {
    for (let i = 0; i < this.btn.length; i++) {
      this.btn[i].addEventListener('click', () => {
        this.modal.forEach((modal, index) => {
          if (index == i) {
            modal.classList.add('open');
          }
        });
      });
    }
  }

  close() {
    this.modal.forEach((modal) => {
      const bg = modal.querySelector('.js_modal-bg');
      bg.addEventListener('click', () => {
        modal.classList.remove('open');
      });
    });
  }

  closeOnLink() {
    this.modal.forEach((modal) => {
      const x = modal.querySelector('.js_modal_link');
      x.addEventListener('click', () => {
        modal.classList.remove('open');
      });
    });
  }
}

const container = document.querySelector('.js_container');
const modal = new Modal(container);