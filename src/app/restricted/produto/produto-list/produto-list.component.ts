import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
  }

  abrirForm() {
    this.router.navigate(['/restricted/produto/form']);
  }

}
