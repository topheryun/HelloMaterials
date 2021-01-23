import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { OrdersModule } from './orders/orders.module';
import { MessagesModule } from './messages/messages.module';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    OrdersModule,
    MessagesModule,
    CustomersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
