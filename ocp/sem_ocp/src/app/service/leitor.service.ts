import { Injectable } from '@angular/core';
import { Dados } from '../model/dados.model';
import { ArquivoService } from './arquivo.service';

@Injectable({ providedIn: 'root' })
export class LeitorService {

    constructor(private arquivoService: ArquivoService) {
    }

    lerArquivo(diretorio: string, arquivo: string): Promise<Dados[]> {
        const extname = arquivo.split('.').pop();
        switch (extname) {
            case 'csv':
                return this.arquivoService.lerArquivoCsv(diretorio + arquivo);
            case 'txt':
                return this.arquivoService.lerArquivoTxt(diretorio + arquivo);
            default:
                throw new Error(`Arquivo não reconhecido: ${arquivo}`);
        }
    }

}
