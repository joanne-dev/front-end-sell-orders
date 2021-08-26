import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss']
})
export class GoBackComponent implements OnInit {

  constructor( readonly router: Router) { }

  ngOnInit(): void {
  }
  showOrders(): void {
    this.router.navigate(['order-list']);
  }
}
