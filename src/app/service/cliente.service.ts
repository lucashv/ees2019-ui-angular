import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/Cliente';
import { RestServiceService } from './rest-service.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends RestServiceService<Cliente> {

  constructor(httpClient: HttpClient) {
    super('/cliente', httpClient);
  }

  public findByCpf(cpf: string) {
    return this.doGet(this.apiName + '/porcpf/' + cpf);
  }

}
