export class Retangulo {

    protected _largura: number = 0;
    protected _altura: number = 0;

    constructor(altura: number, largura: number) {
        this._altura = altura;
        this._largura = largura;
    }

    getAltura(): number {
        return this._altura;
    }

    getLargura(): number {
        return this._largura;
    }

    area(): number {
        return this._altura * this._largura;
    }

}