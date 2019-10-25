import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PedidoService } from 'src/app/service/pedido.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/Cliente';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit {
  cpfParaBuscar: string;
  opcoesClientes: Cliente[];
  clienteSelecionado: Cliente;

  pedidoForm = new FormGroup({
    id: new FormControl(''),
    cpf: new FormControl(''),
    cliente: new FormControl('')
  });

  constructor(
    private pedidoService: PedidoService,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
  }

  buscarClientePorCpf(event) {
    this.clienteService.findByCpf(event.query).subscribe(
      (ret: Cliente[]) => {
        this.opcoesClientes = ret;
      }
    );
  }

  selecionarCliente(event: Cliente) {
    this.clienteSelecionado = event;
    this.pedidoForm.controls['cliente'].setValue(event.nome);
  }

}
