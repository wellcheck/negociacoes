import { NegociacaoController } from "./controllers/negociacao_controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.adiciona();
});
const negociacoesView = NegociacoesView;
const template = negociacoesView;
console.log(template);
