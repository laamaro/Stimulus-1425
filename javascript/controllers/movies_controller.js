import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['input', 'list']

  connect() {
    console.log('controller de filmes conectado');
  }

  // 3. Função de display dos filmes
  displayMovies(data) {
    // data.Search é uma array com vários filmes
    data.Search.forEach((movie) => {
      // criamos uma tag de HTML com a imagem e o título de cada filme
      const movieTag = `<li class='list-group-item'>
      <img src=${movie.Poster}>
      ${movie.Title}</li>`

      // adicionamos cada tag dentro da nossa lista de filmes
      this.listTarget.insertAdjacentHTML('beforeend', movieTag);
    })
  }

  // 2. Função que realiza a busca na API - recebe um argumento (input do usuário)
  fetchMovies(input) {
    fetch(`http://www.omdbapi.com/?s=${input}&apikey=adf1f2d7`)
      .then(response => response.json())
      // chamar outra função para fazer o display dos filmes
      .then(data => this.displayMovies(data))
  }

  // 1. Função que é chamada quando o evento de submit acontece
  search(event) {
    // previnir comportamento padrão do formulário de recarregar a página
    event.preventDefault();

    // limpar lista de buscas anteriores
    this.listTarget.innerHTML = '';

    // chamar a função do fetch passando o valor do input do usuário
    this.fetchMovies(this.inputTarget.value)
  }
}
