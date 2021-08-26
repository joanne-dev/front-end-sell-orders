import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderServicesService} from '../../../../core/services/order-services.service';
import {StorageService} from '../../../../core/services/storage.service';

@Component({
  selector: 'app-sell-order-creation',
  templateUrl: './sell-order-creation.component.html',
  styleUrls: ['./sell-order-creation.component.scss']
})
export class SellOrderCreationComponent implements OnInit {

  orderForm: FormGroup;
  shippingMethods: any[];
  title = 'Order creation';
  orderFinishedSuccess = false;
  orderFinishedWithError = false;
  loading;

  constructor(private orderService: OrderServicesService,
              private formBuilder: FormBuilder,
              private storageService: StorageService) {
    this.createForm();
    this.createListeners();
  }

  ngOnInit(): void {
    this.orderService.getShippingMethods().subscribe(methods => {
      this.shippingMethods = methods;
    });
  }

  createForm(): void{
    this.orderForm = this.formBuilder.group({
      sellerStore  : ['', [ Validators.required ]  ],
      shippingMethod  : [null, [ Validators.required] ],
      orderNumber  : [null, [ Validators.required ]  ],
      buyerFullName  : ['', [ Validators.required ]  ],
      buyerPhoneNumber  : ['', [ Validators.required, Validators.minLength(10) ]  ],
      buyerEmail  : ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      shippingAddress  : ['', [ Validators.required]  ],
      shippingCity  : ['', [ Validators.required ]  ],
      shippingRegion  : ['', [ Validators.required ]  ],
      shippingCountry  : ['', [ Validators.required ]  ],
      lineItems: this.formBuilder.array([])
    });
    this.addLineItem();
  }

  get lineItems(): FormArray{
    return this.orderForm.get('lineItems')  as FormArray;
  }

  addLineItem(): void {
    const items =  this.formBuilder.group({
      ['productName']: ['', [ Validators.required  ]],
      ['productQty']: [null, [ Validators.required  ]],
      ['productWeight']: [null, [ Validators.required ]]
    });

    this.lineItems.push(items);
  }

  deleteLineItem(i: number): void {
    this.lineItems.removeAt(i);
  }

  saveOrder(): void {
    this.loading = true;
    this.orderService.sendOrder(this.orderForm.value).subscribe((response: any) => {
      this.storageService.setLocalStorage('orders', response.data);
      this.orderFinishedSuccess = true;
      this.loading = false;
      Swal.fire(
        'Order created successful!',
        'Check your orders!',
        'success'
      );
      this.orderForm.reset();
    }, error => {
      this.orderFinishedWithError = true;
      this.loading = false;
      Swal.fire({
        icon: 'error',
        title: 'Error creating order :(',
        text: 'Something went wrong!'
      });
    });
  }
  createListeners(): void {
    this.orderForm.valueChanges.subscribe( valor => {
     });
  }

  get invalidSellerStore(){
    return this.orderForm.get('sellerStore').invalid && this.orderForm.get('sellerStore').touched;
  }
  get invalidShippingMethod(){
    return this.orderForm.get('shippingMethod').invalid && this.orderForm.get('shippingMethod').touched;
  }
  get invalidOrderNumber(){
    return this.orderForm.get('orderNumber').invalid && this.orderForm.get('orderNumber').touched;
  }
  get invalidBuyerFullName(){
    return this.orderForm.get('buyerFullName').invalid && this.orderForm.get('buyerFullName').touched;
  }
  get invalidBuyerPhoneNumber(){
    return this.orderForm.get('buyerPhoneNumber').invalid && this.orderForm.get('buyerPhoneNumber').touched;
  }
  get invalidEmail(){
    return this.orderForm.get('buyerEmail').invalid && this.orderForm.get('buyerEmail').touched;
  }
  get invalidShippingAddress(){
    return this.orderForm.get('shippingAddress').invalid && this.orderForm.get('shippingAddress').touched;
  }
  get invalidShippingCity(){
    return this.orderForm.get('shippingCity').invalid && this.orderForm.get('shippingCity').touched;
  }
  get invalidShippingRegion(){
    return this.orderForm.get('shippingRegion').invalid && this.orderForm.get('shippingRegion').touched;
  }
  get invalidShippingCountry(){
    return this.orderForm.get('shippingCountry').invalid && this.orderForm.get('shippingCountry').touched;
  }

}
