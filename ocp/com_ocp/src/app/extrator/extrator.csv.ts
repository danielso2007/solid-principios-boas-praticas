import Dados from "../model/dados.model";
import { Extrator } from "./extrator";

export default class ExtratorCsv extends Extrator {

    constructor(caminho: string) {
        super(caminho);
    }

    lerArquivo(): Promise<Dados[]> {
        return fetch(this.caminho)
            .then(response => response.text())
            .then((data: string) => super.ler(data, this.montarObjeto));
    }

    private montarObjeto(line: string): Dados {
        const columns = line.split(',');
        return new Dados(Number(columns[0]),
            columns[1],
            columns[2],
            columns[3]);
    }

}