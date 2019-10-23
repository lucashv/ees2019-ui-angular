import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  login(username: string, password: string) {
    const body = {
      username,
      password
    };
    return super.doLogin(body);
  }

}
