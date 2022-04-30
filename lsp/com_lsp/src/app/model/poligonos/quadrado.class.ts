import { Poligono } from "../poligono.model";

export class Quadrado extends Poligono {

    constructor(altura: number, largura: number) {
        super(altura, largura);

        if (altura !== largura) {
            throw new Error("A altura não pode ser diferente da largura!");
        }

        super._altura = altura;
        super._largura = altura;
    }

}