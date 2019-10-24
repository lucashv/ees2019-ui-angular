import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/Cliente';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[];

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.carregarClientes();
  }

  abrirForm() {
    this.router.navigate(['/restricted/cliente/form']);
  }

  confirmarExclusao(id: number) {
    this.confirmationService.confirm({
      message: 'Deseja excluir o Cliente ' + id + '?',
      accept: () => {
        this.clienteService.excluir(id).subscribe(
          ret => {
            this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Cliente Excluído com Sucesso!'});
            this.carregarClientes();
          },
          err => {
            console.error(err);
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível excluir o Cliente.'});
          }
        );
      }
    });
  }

  private carregarClientes() {
    this.clienteService.getAll().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

}
