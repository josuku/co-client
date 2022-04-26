import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { Order } from '../../model/order';
import { Product } from '../../model/product';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  @Output() public orderChanged: EventEmitter<Order> = new EventEmitter();
  @ViewChild('acc') public accordion!: NgbAccordion;
  public model: Order = new Order();
  public product: Product = new Product();

  constructor() { }

  public productChangedHandler(productData: Product) {
    this.product = productData;
  }

  public addProduct() {
    this.model.products.push(this.product);
    this.product = new Product();
    this.accordion.toggle('addProductPanel');
    this.onChange();
  }

  public onChange() { 
    this.orderChanged.emit(this.model);
  }
}
