import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setLocalStorage(name: string, data: any): void{
    const orders = JSON.parse(this.getLocalStorage(name));
    const newOrders = [data];
    if (orders) {
      orders.push(data);
      localStorage.setItem(name,  JSON.stringify(orders));
    } else {
      localStorage.setItem(name,  JSON.stringify(newOrders));
    }
  }

  getLocalStorage(name: string): any{
    return localStorage.getItem(name);
  }
}
