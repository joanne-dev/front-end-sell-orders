import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderDetails} from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class OrderServicesService {
  URL = 'https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox';
  URL_ORDER_SERVICE = 'http://localhost:9021/';

  constructor(private http: HttpClient) { }

  getShippingMethods(): Observable<any>{
    return this.http.get(this.URL + '/shipping-methods', {headers: this.headers});
  }

  sendOrder(orderInfo: any): Observable<OrderDetails> {
    const request = this.getOrderBody(orderInfo);
    return this.http.post<OrderDetails>(this.URL_ORDER_SERVICE + 'order', request);
  }

  get headers(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT'
    });
  }

  getOrderBody(orderInfo: any): any {
    return {
      ...orderInfo
    };
  }

}
