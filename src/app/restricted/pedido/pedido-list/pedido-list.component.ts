import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { Pedido } from 'src/app/model/Pedido';
import { FormGroup, FormControl } from '@angular/forms';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent implements OnInit {
  criterioCliente: Cliente;
  opcoesCliente: Cliente[];
  clienteSelecionado: Cliente;
  pedidos: Pedido[];

  formBusca = new FormGroup({
    cpf: new FormControl(''),
    cliente: new FormControl('')
  });

  constructor(
    private pedidoService: PedidoService,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
  }

  buscarCliente(event) {
    this.clienteService.findByCpf(event.query).subscribe(
      (ret: Cliente[]) => {
        this.opcoesCliente = ret;
      }
    );
  }

  selecionarCliente(event: Cliente) {
    this.clienteSelecionado = event;
    this.formBusca.controls.cliente.setValue(event.nome);
  }

  buscarPedidos() {
    this.pedidoService.findByIdCliente(this.clienteSelecionado.id).subscribe(
      (ret: Pedido[]) => {
        this.pedidos = ret;
      }
    );
  }
}
