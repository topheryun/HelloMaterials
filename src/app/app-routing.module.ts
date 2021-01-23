import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';

const routes: Routes = [
  // {path: 'home', component: AppComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'messages', component: MessageListComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
