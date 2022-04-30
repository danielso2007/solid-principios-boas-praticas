import { Retangulo } from "./retangulo.class";

export class Quadrado extends Retangulo {

    constructor(altura: number, largura: number) {
        super(altura, largura);
        super._altura = altura;
        super._largura = altura;
    }

}