import { Injectable } from '@angular/core';
import { Extrator } from '../extrator/extrator';

@Injectable({ providedIn: 'root' })
export class ArquivoService {

    constructor() { }

    ler(extrator: Extrator): any {
        return extrator.lerArquivo();
    }


}