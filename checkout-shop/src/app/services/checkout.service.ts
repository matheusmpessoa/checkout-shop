import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(
    private http: HttpClient
  ) { }

  sendCheckoutCarrinho(body: object) {
    return this.http.post<any>(ENDPOINTS.urlCheckout, body);
  }

  getCheckouts() {
    return this.http.get<any>(ENDPOINTS.urlCheckout);
  }
}
