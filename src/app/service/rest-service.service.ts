import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService<T> extends BaseService {
  private apiName: string;


  constructor(apiName: string, httpClient: HttpClient) {
    super(httpClient);
    this.apiName = apiName;
  }

  getAll(): any {
    return this.doGet(this.apiName);
  }

  getById(id: number) {
    return this.doGet(this.apiName + '/' + id);
  }

  save(obj: T) {
    return this.doPost(this.apiName, obj);
  }

  excluir(id: number) {
    return this.doDelete(this.apiName + '/' + id);
  }
}
