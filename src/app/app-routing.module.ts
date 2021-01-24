import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerCardComponent } from './customers/customer-card/customer-card.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerNewComponent } from './customers/customer-new/customer-new.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageNewComponent } from './messages/message-new/message-new.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderNewComponent } from './orders/order-new/order-new.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'messages', component: MessageListComponent },
  { path: 'customers/info', component: CustomerCardComponent },
  { path: 'messages/new', component: MessageNewComponent },
  { path: 'customers/new', component: CustomerNewComponent },
  { path: 'orders/new', component: OrderNewComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
