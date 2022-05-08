import { Logistic } from "./logistic";
import { Product } from "./product";

export class Order {
   public id: number = 0;
   public clientId: number = 0;
   public date: Date = new Date(0);
   public direction: string = '';
   public products: Product[] = [];
   public total: number = 0;
   public confirmed: boolean = false;
   public logistic: Logistic[] = [];
}
