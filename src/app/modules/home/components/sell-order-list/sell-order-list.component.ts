import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../../../core/services/storage.service';
import {Router} from '@angular/router';
import {OrderDetails} from '../../../../core/models/types';

@Component({
  selector: 'app-sell-order-list',
  templateUrl: './sell-order-list.component.html',
  styleUrls: ['./sell-order-list.component.scss']
})
export class SellOrderListComponent implements OnInit {
  orders: OrderDetails [];
  title = 'Order list';
  constructor(private storageService: StorageService, readonly router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders(): void {
    this.orders = JSON.parse(this.storageService.getLocalStorage('orders'));
    console.log(this.orders);
  }

  addOrder(): void {
    this.router.navigate(['order-creation']);
  }

  areThereOrders(): boolean {
    return this.orders && this.orders.length > 0;
  }
  showDetails(order): void{
    this.router.navigate(['/order-details'], {queryParams: {id: order.orderInfo.orderNumber}});
  }
}
