import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Quadrado } from './model/quadrado.class';
import { Retangulo } from './model/retangulo.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  retangulo: Retangulo = new Retangulo(12, 10);
  quadrado: Quadrado = new Quadrado(10, 8);
  retanguloDeQuadrado: Retangulo = new Quadrado(8, 5);

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('LSP com Erro');
  }

}
