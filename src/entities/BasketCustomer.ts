import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Basket } from "./Basket";

@Entity("BasketCustomer", { schema: "public" })
export class BasketCustomer {
  @Column("bigint", { name: "customer_id" })
  customerId!: string;

  @ManyToOne(() => Basket, (basket) => basket.basketCustomers)
  @JoinColumn([{ name: "basket_id", referencedColumnName: "basketId" }])
  basket!: Basket;
}
