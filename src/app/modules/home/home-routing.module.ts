import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SellOrderListComponent} from './components/sell-order-list/sell-order-list.component';
import {SellOrderCreationComponent} from './components/sell-order-creation/sell-order-creation.component';
import {SellOrderDetailsComponent} from './components/sell-order-details/sell-order-details.component';

export const homeRoutes: Routes = [
  {path: 'order-list', component: SellOrderListComponent},
  {path: 'order-creation', component: SellOrderCreationComponent},
  {path: 'order-details', component: SellOrderDetailsComponent},
  {path: '', redirectTo: 'order-list', pathMatch: 'full'},
];
@NgModule({
  exports: [
    RouterModule
  ],
  declarations: [],
  imports: [
    RouterModule.forRoot(homeRoutes)
  ]
})

export class HomeRoutingModule {}
