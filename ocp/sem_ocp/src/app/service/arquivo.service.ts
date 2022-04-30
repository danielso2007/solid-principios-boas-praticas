import { Injectable } from '@angular/core';
import { Dados } from '../model/dados.model';

@Injectable({ providedIn: 'root' })
export class ArquivoService {

    constructor() { }

    lerArquivoTxt(caminho: string): Promise<Dados[]> {
        return fetch(caminho)
            .then(response => response.text())
            .then((data: string) => this.ler(data, this.montarObjetoDeTxt));
    }

    lerArquivoCsv(caminho: string): Promise<Dados[]> {
        return fetch(caminho)
            .then(response => response.text())
            .then((data: string) => this.ler(data, this.montarObjetoDeCsv));
    }

    private ler(data: any, fc: any): any {
        return data.split(/[\r\n]+/).map((value: string) => { return fc(value) });
    }

    private montarObjetoDeTxt(line: string): Dados {
        return new Dados(Number(line.substring(0, 9).trim()),
            line.substring(9, 39).trim(),
            '',
            line.substring(39, 69).trim());
    }

    private montarObjetoDeCsv(line: string): Dados {
        const columns = line.split(',');
        return new Dados(Number(columns[0]),
            columns[1],
            columns[2],
            columns[3]);
    }

}