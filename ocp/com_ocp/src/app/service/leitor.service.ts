import { Injectable } from '@angular/core';
import { Extrator } from '../extrator/extrator';
import Dados from '../model/dados.model';
import { ArquivoService } from './arquivo.service';

@Injectable({ providedIn: 'root' })
export class LeitorService {

    constructor(private arquivoService: ArquivoService) { }

    lerArquivo(extrator: Extrator): Promise<Dados[]> {
        return this.arquivoService.ler(extrator);
    }

}
