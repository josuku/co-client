import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrderFormComponent } from './order-form/order-form.component';
import { ProductListComponent } from '../product-components/product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductComponentsModule } from '../product-components/product-components.module';
import { ProductFormComponent } from '../product-components/product-form/product-form.component';

@NgModule({
  declarations: [
    OrderFormComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ProductComponentsModule
  ],
  exports: [
    OrderFormComponent,
    OrderListComponent,
    ProductFormComponent,
    ProductListComponent
  ],
  providers: []
})
export class OrderComponentsModule { }

