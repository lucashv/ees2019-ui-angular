import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  abrirForm() {
    this.router.navigate(['/restricted/produto/form']);
  }

}
