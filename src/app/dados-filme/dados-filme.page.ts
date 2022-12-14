import { Component, OnInit } from '@angular/core';
import { IFilmes } from '../models/IFilmes.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme!: IFilmes;

  constructor(
    public dadosService: DadosService
  ) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    console.log('Filme Enviado', this.filme)
  }

}
