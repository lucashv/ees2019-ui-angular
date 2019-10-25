import { Pedido } from './Pedido';
import { Produto } from './Produto';

export class ItemPedido {
    id: number;
    quantidade: number;
    pedido: Pedido;
    produto: Produto;
}