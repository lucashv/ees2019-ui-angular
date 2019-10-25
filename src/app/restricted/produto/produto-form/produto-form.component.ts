import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProdutoService } from 'src/app/service/produto.service';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {

  produtoForm = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    descricao: new FormControl('')
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    let id = null;
    this.route.paramMap.subscribe(p => {
      id = p.get('id');
    });
    if (id !== null) {
      this.produtoService.getById(id).subscribe(
        (ret: Produto) => {
          this.produtoForm.setValue({
            id: ret.id,
            nome: ret.nome,
            descricao: ret.descricao
          });
        }
      );
    }
  }

  onSubmitForm() {
    const produtoDto = {
      id: this.produtoForm.get('id').value === '' ? null : this.produtoForm.get('id').value,
      nome: this.produtoForm.get('nome').value,
      descricao: this.produtoForm.get('descricao').value
    };
    this.produtoService.save(produtoDto).subscribe(
      ret => {
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Produto Salvo com sucesso!'});
        this.router.navigate(['/restricted/produto']);
      },
      err => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Houve um problema ao tentar salvar o Produto!'});
      });
  }

}
