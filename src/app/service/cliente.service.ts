import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService {
  readonly APINAME = '/cliente';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAll(): any {
    return this.doGet(this.APINAME);
  }

  save(cliente: Cliente) {
    const body = {
      cliente
    };
    return this.doPost(this.APINAME, body);
  }
}
