import Item from "./item.model";

export default class CarrinhoDeCompra {

    itens: Item[] = [];

    constructor() {
    }

    exibirItens(): Item[] {
        return this.itens;
    }

    adicionarItem(descricao: string, valor: number) {
        this.itens.push({ descricao: descricao, valor: valor });
    }

    validarCarrinho(): boolean {
        return this.itens && this.itens.length > 0;
    }

}