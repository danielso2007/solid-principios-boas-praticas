import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import CarrinhoDeCompra from './model/carrinho.compra.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  carrinhoCompra: CarrinhoDeCompra;
  console: string[] = [];

  constructor(private titleService: Title) {
    this.carrinhoCompra = new CarrinhoDeCompra();
  }

  ngOnInit(): void {
    this.titleService.setTitle('SRP com Erro');
  }

  iniciar(): void {
    this.console = [];
    this.console.push('Iniciando processo...');
    

    setTimeout(() => {
      this.console.push('Status: ' + this.carrinhoCompra.exibirStatus());
      this.console.push('Tentando confirmar carrinho vazio...');
      this.console.push('Retorno: ' + this.carrinhoCompra.confirmarPedido() + '');
    }, 1000);

    setTimeout(() => {
      this.console.push('Adicionado novo item na lista...');
      this.carrinhoCompra.adicionarItem('Arroz', 15.98);
      this.carrinhoCompra.adicionarItem('Óleo de soja', 18.45);
      this.console.push('Valor Total: ' + this.carrinhoCompra.exibirValorTotal());
    }, 2000);

    setTimeout(() => {
      this.console.push('Status: ' + this.carrinhoCompra.exibirStatus());
    }, 3000);

    setTimeout(() => {
      this.console.push('Adicionado novo item na lista...');
      this.carrinhoCompra.adicionarItem('Açúcar', 8.10);
      this.carrinhoCompra.adicionarItem('Café', 20.74);
      this.console.push('Valor Total: ' + this.carrinhoCompra.exibirValorTotal());
    }, 4000);

    setTimeout(() => {
      this.console.push('Status: ' + this.carrinhoCompra.exibirStatus());
    }, 5000);

    setTimeout(() => {
      this.console.push('Confirmando pedido...');
      this.console.push('Retorno: ' + this.carrinhoCompra.confirmarPedido() + '');
    }, 6500);

    setTimeout(() => {
      this.console.push('Status atual: ' + this.carrinhoCompra.exibirStatus());
    }, 7500);
  }

}
