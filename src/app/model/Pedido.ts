import { Cliente } from './Cliente';
import { ItemPedido } from './ItemPedido';

export class Pedido {
    id: number;
    data: Date;
    cliente: Cliente;
    itens: ItemPedido[];
}
