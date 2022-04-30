import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Poligono } from './model/poligono.model';
import { Quadrado } from './model/poligonos/quadrado.class';
import { Retangulo } from './model/poligonos/retangulo.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  retangulo: Retangulo = new Retangulo(15, 10);
  quadrado: Quadrado = new Quadrado(7, 7);
  poligono: Poligono = new Retangulo(8, 5);

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('LSP Correto');
  }

  calculaDaArea(pol: Poligono): number {
    return pol.area();
  }

}
