import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private readonly BASE_API_URL = 'http://localhost:8000';
  private readonly API_PREFIX = '/api';

  constructor(
    protected httpClient: HttpClient
  ) { }

  protected getAPIUrl(endpoint: string): string {
    return this.BASE_API_URL + this.API_PREFIX + endpoint;
  }

  protected doGet(endpoint: string) {
    return this.httpClient.get(this.getAPIUrl(endpoint));
  }

  protected doLogin(body: any) {
    return this.httpClient.post<any>(this.BASE_API_URL + '/login', body, { observe: 'response' });
  }

  protected doPost(endpoint: string, body: any) {
    return this.httpClient.post(this.getAPIUrl(endpoint), body, { observe: 'response' });
  }

  protected doPut(endpoint: string, body: any) {
    return this.httpClient.put(this.getAPIUrl(endpoint), body, { observe: 'response' });
  }

  protected doDelete(endpoint: string) {
    return this.httpClient.delete(this.getAPIUrl(endpoint), { observe: 'response' });
  }
}
