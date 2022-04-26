import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    ProductFormComponent,
    ProductListComponent
  ],
  providers: []
})
export class ProductComponentsModule { }

