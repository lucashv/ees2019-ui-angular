import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/model/Produto';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[];

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.carregarProdutos();
  }

  abrirForm() {
    this.router.navigate(['/restricted/produto/form']);
  }

  confirmarExclusao(id: number) {
    this.confirmationService.confirm({
      message: 'Deseja excluir o Produto ' + id + '?',
      accept: () => {
        this.produtoService.excluir(id).subscribe(
          ret => {
            this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Produto Excluído com Sucesso!'});
            this.carregarProdutos();
          },
          err => {
            console.error(err);
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível excluir o Produto.'});
          }
        );
      }
    });
  }

  private carregarProdutos() {
    this.produtoService.getAll().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

}
