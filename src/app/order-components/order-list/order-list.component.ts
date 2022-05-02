import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutResponse } from 'src/app/interfaces/checkout-response.interface';
import { Order } from '../../models/order';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public orders: Order[] = [];
  private order: Order = new Order();

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    await this.getOrdersFromServer();
  }

  public openModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  public orderChangedHandler(orderData: Order) {
    this.order = orderData;
  }

  public async saveAndClose() {
    const result: CheckoutResponse = await this.checkoutInServer();
    if (!result.success) {
      alert((result.errorMessage.length > 0 ? result.errorMessage: 'Error processing order'));
      return;
    }

    await this.getOrdersFromServer();
    this.order = new Order();
    this.modalService.dismissAll();
  }

  public async getOrdersFromServer(): Promise<Order[]>{
    return new Promise((resolve, reject) => {
      const url = 'http://localhost:3001/api/v1/orders';
      this.http.get<Order[]>(url).subscribe((result) => {
        console.log('getOrdersFromServer:', result);
        this.orders = [ ... result ];
        resolve(result);
      });
    });
  }
  
  public async checkoutInServer(): Promise<CheckoutResponse> {
    return new Promise((resolve, reject) => {
      const url = 'http://localhost:3001/api/v1/checkout';
      this.http.post<CheckoutResponse>(url, this.order)
        .subscribe(
          (result) => {
            console.log('checkoutInServer:', result);
            resolve(result);
          },
          (error) => {
            const errorMsg: CheckoutResponse = {
              id: 0,
              success: false,
              errorMessage: error
            }
            resolve(errorMsg);
          }
        );
    });
  }
}
