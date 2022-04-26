import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrderFormComponent } from './components/order-form/order-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  declarations: [
    OrderFormComponent,
    ProductFormComponent,
    ProductListComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    OrderFormComponent,
    ProductListComponent,
    OrderListComponent
  ],
  providers: []
})
export class OrderFormModule { }

