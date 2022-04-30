export abstract class Poligono {

    protected _largura: number = 0;
    protected _altura: number = 0;

    constructor(altura: number, largura: number) {
        this._altura = altura;
        this._largura = largura;
    }

    setAltura(altura: number) {
        this._altura = altura;
    }

    getAltura(): number {
        return this._altura;
    }

    setLargura(largura: number) {
        this._largura = largura;
    }

    getLargura(): number {
        return this._largura;
    }

    area(): number {
        return this._altura * this._largura;
    }

}