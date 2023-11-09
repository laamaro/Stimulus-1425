import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

import DisableButtonController from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButtonController)

import MoviesController from "./controllers/movies_controller.js"
Stimulus.register("movies", MoviesController)

























// selecionar todos os botões
// const allButtons = document.querySelectorAll('.btn');

// // selecionar pelo id

// const button = document.getElementById('click-me')

// selecionar botão
// const button = document.querySelector('#click-me');

// button.addEventListener('click', (event) => {
//   console.log(event.currentTarget);
//   button.innerText = 'Bingo!';
//   button.classList.add('btn-success');
//   button.classList.remove('btn-primary');
//   button.setAttribute('disabled', '');
// })
