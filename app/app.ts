import { Negociacao } from "./models/negociacao.js";
import { NegociacaoController } from "./controllers/negociacao_controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form');
form.addEventListener('submit', (event:Event) => {
    event.preventDefault();
    controller.adiciona();});



