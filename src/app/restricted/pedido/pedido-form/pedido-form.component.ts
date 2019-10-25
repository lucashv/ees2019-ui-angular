import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PedidoService } from 'src/app/service/pedido.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/Cliente';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit {
  cpfParaBuscar: string;
  opcoesClientes: Cliente[];
  clienteSelecionado: Cliente;
  criterioBuscaProduto: string;
  opcoesProdutos: Produto[];
  produtoSelecionado: Produto;

  pedidoForm = new FormGroup({
    id: new FormControl(''),
    cpf: new FormControl(''),
    cliente: new FormControl(''),
    produto: new FormControl(''),
    qtd: new FormControl('')
  });

  constructor(
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService
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
    this.pedidoForm.controls.cliente.setValue(event.nome);
  }

  buscarProduto(event) {
    this.produtoService.findByNome(event.query).subscribe(
      (ret: Produto[]) => {
        this.opcoesProdutos = ret;
      }
    );
  }

  selecionarProduto(event: Produto) {
    this.produtoSelecionado = event;
  }

}
