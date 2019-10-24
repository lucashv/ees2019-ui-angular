import { Injectable } from '@angular/core';
import { Produto } from '../model/Produto';
import { RestServiceService } from './rest-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends RestServiceService<Produto> {

  constructor(httpClient: HttpClient) {
    super('/produto', httpClient);
  }

}
