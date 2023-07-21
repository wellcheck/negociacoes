import { DiaDaSemana } from "../enums/dia-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes;
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView'); 
    private readonly DOMINGO = 0;
    private readonly SABADO = 6;
    

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

   public adiciona(){
        const negociacao = this.criarNegociacao();
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias uteis são aceitas!');
        }
        this.negociacoes.adiciona(negociacao);
            this.atualizaView();
            this.limparFormulario();
    }

    private ehDiaUtil(data : Date){
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO
    }

    private criarNegociacao(): Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
       return new Negociacao(date, quantidade, valor );
    }

    private limparFormulario(){
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);
      this.mensagemView.update('Negociação adicionada com sucesso.');
    }
}