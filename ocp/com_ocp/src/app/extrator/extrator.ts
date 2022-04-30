import Dados from "../model/dados.model";

export abstract class Extrator {

    protected caminho: string = '';

    constructor(caminho: string) {
        this.caminho = caminho;
    }

    abstract lerArquivo(): Promise<Dados[]>;

    protected ler(data: any, fc: any): any {
        return data.split(/[\r\n]+/).map((value: string) => { return fc(value) });
    }

}