import { Injectable } from '@angular/core';
import { Pedido } from '../model/Pedido';
import { RestServiceService } from './rest-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService extends RestServiceService<Pedido> {

  constructor(httpClient: HttpClient) {
    super('/pedido', httpClient);
  }

}
