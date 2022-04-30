import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Email from './classes/email';
import Mensageiro from './classes/mensageiro';
import Sms from './classes/sms';
import Whatsapp from './classes/whatsapp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mensageiro: Mensageiro;
  console: string[] = [];

  constructor(private titleService: Title) {
    this.mensageiro = new Mensageiro(new Email());
  }

  ngOnInit(): void {
    this.titleService.setTitle('DIP Correto');
    this.console.push('Enviando token...');

    setTimeout(() => {
      this.mensageiro = new Mensageiro(new Email());
      this.console.push(this.mensageiro.enviarToken()); 
    }, 700);

    setTimeout(() => {
      this.mensageiro = new Mensageiro(new Sms());
      this.console.push(this.mensageiro.enviarToken());
    }, 1000);

    setTimeout(() => {
      this.mensageiro = new Mensageiro(new Whatsapp());
      this.console.push(this.mensageiro.enviarToken());
    }, 1500);
  }

}
