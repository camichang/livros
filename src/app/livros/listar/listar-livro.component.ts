import { Component, OnInit } from '@angular/core';
import { LivroService, Livro } from '../shared';

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.css']
})
export class ListarLivroComponent implements OnInit {

  livros: Livro[]

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.livros = this.listarLivros();
    this.livros = [
      new Livro(1, "O Luar", 'Jose Diniz', 'Laemmert', true),
      new Livro(2, "Sertões", 'Euclides da Cunha','Laemmert', false),
      new Livro(3, "Um dia", )
    ]
  }

  listarLivros(): Livro[] {
    return this.livroService.listarLivros();
  }

}
