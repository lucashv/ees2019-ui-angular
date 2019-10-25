import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[];

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.carregarProdutos();
  }

  abrirForm() {
    this.router.navigate(['/restricted/produto/form']);
  }

  private carregarProdutos() {
    this.produtoService.getAll().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

}
