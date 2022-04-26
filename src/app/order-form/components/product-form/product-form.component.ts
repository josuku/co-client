import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  @Output() public productChanged: EventEmitter<Product> = new EventEmitter();
  public model: Product = new Product();

  constructor() { }

  onChange() { 
    this.productChanged.emit(this.model);
  }
}
