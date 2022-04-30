import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Mensageiro, { TipoCanal } from './classes/mensageiro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mensageiro: Mensageiro;
  console: string[] = [];

  constructor(private titleService: Title) {
    this.mensageiro = new Mensageiro();
  }

  ngOnInit(): void {
    this.titleService.setTitle('DIP com Erro');
    this.console.push('Enviando token...');

    setTimeout(() => {
      this.mensageiro.canal = TipoCanal.EMAIL;
      this.console.push(this.mensageiro.enviarToken()); 
    }, 700);

    setTimeout(() => {
      this.mensageiro.canal = TipoCanal.SMS;
      this.console.push(this.mensageiro.enviarToken());
    }, 1000);
  }

}
