import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  doLogin(username: string, password: string) {
    const body = {
      username,
      password
    };
    return super.doLogin(body);
  }

}
