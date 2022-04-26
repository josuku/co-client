import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from '../../models/order';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  public orders: Order[] = [];
  private order: Order = new Order();

  constructor(private modalService: NgbModal) {}

  public openModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  // GET ORDERS FROM SERVICE

  public saveAndClose() {
    // SAVE IN CLOUD SERVICE

    // REFRESH ORDERS FROM SERVICE
    this.orders.push(this.order);
    this.order = new Order();
    this.modalService.dismissAll();
  }

  public orderChangedHandler(orderData: Order) {
    this.order = orderData;
  }
}
