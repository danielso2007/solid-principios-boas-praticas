import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Pedido from './model/pedido.model';
import { EmailService } from './service/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pedido: Pedido;
  console: string[] = [];

  constructor(private titleService: Title, private _emailService: EmailService) {
    this.pedido = new Pedido();
  }

  ngOnInit(): void {
    this.titleService.setTitle('SRP Correto');
  }

  iniciar(): void {
    this.console = [];
    this.console.push('Iniciando processo...');
    

    setTimeout(() => {
      this.console.push('Status: ' + this.pedido.exibirStatus());
      this.console.push('Tentando confirmar carrinho vazio...');
      this.console.push('Retorno: ' + this.pedido.confirmar() + '');
    }, 1000);

    setTimeout(() => {
      this.console.push('Adicionado novo item na lista...');
      this.pedido.carrinhoCompra.adicionarItem('Arroz', 15.98);
      this.pedido.carrinhoCompra.adicionarItem('Óleo de soja', 18.45);
      this.console.push('Valor Total: ' + this.pedido.exibirValorTotal());
    }, 2000);

    setTimeout(() => {
      this.console.push('Status: ' + this.pedido.exibirStatus());
    }, 3000);

    setTimeout(() => {
      this.console.push('Adicionado novo item na lista...');
      this.pedido.carrinhoCompra.adicionarItem('Açúcar', 8.10);
      this.pedido.carrinhoCompra.adicionarItem('Café', 20.74);
      this.console.push('Valor Total: ' + this.pedido.exibirValorTotal());
    }, 4000);

    setTimeout(() => {
      this.console.push('Status: ' + this.pedido.exibirStatus());
    }, 5000);

    setTimeout(() => {
      this.console.push('Confirmando pedido...');
      const retorno = this.pedido.confirmar();
      this.console.push('Retorno: ' + retorno + '');
      if (retorno) {
        this.console.push(this._emailService.dispararEmail());
      }
    }, 6500);

    setTimeout(() => {
      this.console.push('Status atual: ' + this.pedido.exibirStatus());
    }, 7500);
  }

}
