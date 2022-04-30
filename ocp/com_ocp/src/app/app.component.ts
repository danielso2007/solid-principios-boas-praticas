import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import ExtratorCsv from './extrator/extrator.csv';
import ExtratorTxt from './extrator/extrator.txt';
import Dados from './model/dados.model';
import { LeitorService } from './service/leitor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  arquivoTxt: Dados[] = [];
  arquivoCsv: Dados[] = [];

  constructor(private titleService: Title, private leitorService: LeitorService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('OCP Correto');
    this.leitorService.lerArquivo(new ExtratorTxt('assets/data/dados.txt')).then((result: Dados[]) => {
      this.arquivoTxt = result;
    });
    this.leitorService.lerArquivo(new ExtratorCsv('assets/data/dados.csv')).then((result: Dados[]) => {
      this.arquivoCsv = result;
    });
  }

}
