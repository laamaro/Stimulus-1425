import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['button', 'link']

  connect() {
    // console.log("Controller conectado");
  }

  disable() {
    this.buttonTarget.innerText = 'Bingo!';
    this.buttonTarget.classList.remove('btn-primary');
    this.buttonTarget.classList.add('btn-success');
    this.buttonTarget.setAttribute('disabled', '');

    this.linkTarget.classList.remove('d-none');
  }

  resetBtn() {
    this.buttonTarget.innerText = 'Click me!';
    this.buttonTarget.classList.add('btn-primary');
    this.buttonTarget.classList.remove('btn-success');
    this.buttonTarget.removeAttribute('disabled');

    this.linkTarget.classList.add('d-none');
  }
}
