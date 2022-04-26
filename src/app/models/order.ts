import { Product } from "./product";

export class Order {
   public clientId: number = 0;
   public date: Date = new Date(0);
   public direction: string = '';
   public products: Product[] = [];
}
