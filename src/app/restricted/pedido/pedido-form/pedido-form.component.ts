import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PedidoService } from 'src/app/service/pedido.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/Cliente';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { ItemPedido } from 'src/app/model/ItemPedido';
import { Pedido } from 'src/app/model/Pedido';
import { MessageService } from 'primeng/api';

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
  itensPedido: ItemPedido[] = [];
  pedido: Pedido;

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
    private produtoService: ProdutoService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.pedido = new Pedido();
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
    this.pedido.cliente = event;
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

  addItem() {
    const item: ItemPedido = {
      id: null,
      produto: this.produtoSelecionado,
      pedido: null,
      quantidade: this.pedidoForm.controls.qtd.value
    };
    this.itensPedido.push(item);
    this.produtoSelecionado = null;
    this.pedidoForm.controls.produto.setValue('');
    this.pedidoForm.controls.qtd.setValue('');
  }

  salvarPedido() {
    this.pedido.data = new Date();
    this.pedido.itens = this.itensPedido;
    this.pedidoService.save(this.pedido).subscribe(
      ret => {
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Pedido criado com sucesso!'});
        this.pedidoForm.reset();
        this.clienteSelecionado = null;
        this.produtoSelecionado = null;
        this.itensPedido = [];
      },
      err => {
        console.log(err);
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Houve um erro ao criar o Pedido!'});
      }
    );
  }

}
