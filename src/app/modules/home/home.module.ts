import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SellOrderListComponent } from './components/sell-order-list/sell-order-list.component';
import { SellOrderDetailsComponent } from './components/sell-order-details/sell-order-details.component';
import { SellOrderCreationComponent } from './components/sell-order-creation/sell-order-creation.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { GoBackComponent } from './components/go-back/go-back.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SellOrderListComponent,
    SellOrderDetailsComponent,
    SellOrderCreationComponent,
    GoBackComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
