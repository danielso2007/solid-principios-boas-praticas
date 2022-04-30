import Dados from "../model/dados.model";
import { Extrator } from "./extrator";

export default class ExtratorTxt extends Extrator {

    constructor(caminho: string) {
        super(caminho);
    }

    lerArquivo(): Promise<Dados[]> {
        return fetch(this.caminho)
            .then(response => response.text())
            .then((data: string) => super.ler(data, this.montarObjeto));
    }

    private montarObjeto(line: string): Dados {
        return new Dados(Number(line.substring(0, 9).trim()),
            line.substring(9, 39).trim(),
            '',
            line.substring(39, 69).trim());
    }

}