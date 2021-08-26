import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderDetails} from '../../../../core/models/types';
import {StorageService} from '../../../../core/services/storage.service';

@Component({
  selector: 'app-sell-order-details',
  templateUrl: './sell-order-details.component.html',
  styleUrls: ['./sell-order-details.component.scss']
})

export class SellOrderDetailsComponent implements OnInit {

  order: any;
  orderDetail: OrderDetails;
  title = 'Sell order details';
  constructor(private route: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params.id);
      const orders = JSON.parse(this.storageService.getLocalStorage('orders'));
      console.log('orders:: ', orders[1]);
      this.orderDetail = orders.filter(order => String(order.orderInfo.orderNumber) === params.id)[0];
      console.log('this.orderDetail: ', this.orderDetail);
    });
  }
}
