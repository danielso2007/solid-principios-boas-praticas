import CarrinhoDeCompra from "./carrinho.compra.model";

export default class Pedido {

    status: string;
    carrinhoCompra: CarrinhoDeCompra;
    valorPedido: number;

    constructor() {
        this.status = 'aberto';
        this.carrinhoCompra = new CarrinhoDeCompra();
        this.valorPedido = 0.0;
    }

    confirmar(): boolean {
        if (this.carrinhoCompra.validarCarrinho()) {
            this.status = 'confirmado';
            console.log('Confirmando pedido...');
            console.log('Pedido realizado com sucesso!');
            return true;
        } else {
            console.error('Não há itens no carrinho!');
            return false;
        }
    }

    exibirStatus() {
        return this.status;
    }

    exibirValorTotal(): number {
        let valorTotal = 0.0;
        this.carrinhoCompra.itens.forEach(i => valorTotal += i.valor);
        return valorTotal;
    }

}