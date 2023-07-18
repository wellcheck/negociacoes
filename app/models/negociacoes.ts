import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];
      
    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
        
    }

    lista(): readonly Negociacao[]{
        return this.negociacoes
    }
}

