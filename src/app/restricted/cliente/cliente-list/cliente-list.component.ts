import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/Cliente';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[];

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.clienteService.getAll().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

  abrirForm() {
    this.router.navigate(['/restricted/cliente/form']);
  }

}
