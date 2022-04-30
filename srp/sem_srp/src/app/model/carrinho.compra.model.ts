import Item from "./item.model";

export default class CarrinhoDeCompra {

    itens: Item[] = [];
    status: string = 'vazio';
    ValorTotal: number = 0.0;

    constructor() {
    }

    exibirItens(): Item[] {
        return this.itens;
    }

    adicionarItem(descricao: string, valor: number) {
        if (this.status === 'vazio') {
            this.status = 'aberto';
        }
        this.itens.push({descricao: descricao, valor: valor});
    }

    exibirValorTotal(): number {
        this.ValorTotal = 0.0;
        this.itens.forEach(i => this.ValorTotal += i.valor);
        return this.ValorTotal;
    }

    exibirStatus(): string {
        return this.status;
    }

    confirmarPedido(): boolean {
        if (this.validarCarrinho()) {
            this.status = 'confirmado';
            console.log('Confirmando pedido...');
            console.log('Pedido realizado com sucesso!');
            this.enviarEmailConfirmacao();
            return true;
        } else {
            console.error('Não há itens no carrinho!');
            return false;
        }
    }

    enviarEmailConfirmacao(): void {
        console.log('enviando e-mail de confirmação...');
    }

    validarCarrinho(): boolean {
        return this.itens && this.itens.length > 0;
    }

}