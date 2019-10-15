import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  protected doLogin(body: any, options?: any) {
    return this.httpClient.post(this.BASE_API_URL + '/login', body, options);
  }

  protected doPost(endpoint: string, body: any, options?: any) {
    return this.httpClient.post(this.getAPIUrl(endpoint), body, options);
  }

  protected doPut(endpoint: string, body: any, options?: any) {
    return this.httpClient.put(this.getAPIUrl(endpoint), body, options);
  }

  protected doDelete(endpoint: string, options?: any) {
    return this.httpClient.delete(this.getAPIUrl(endpoint), options);
  }
}
