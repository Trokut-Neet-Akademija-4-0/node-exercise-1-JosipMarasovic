import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Basket } from "./Basket";
import { PaymentMethod } from "./PaymentMethod";

@Entity("BasketPaymentMethod", { schema: "public" })
export class BasketPaymentMethod {
  @ManyToOne(() => Basket, (basket) => basket.basketPaymentMethods)
  @JoinColumn([{ name: "basket_id", referencedColumnName: "basketId" }])
  basket: Basket = new Basket;

  @ManyToOne(
    () => PaymentMethod,
    (paymentMethod) => paymentMethod.basketPaymentMethods
  )
  @JoinColumn([{ name: "method_id", referencedColumnName: "methodId" }])
  method: PaymentMethod = new PaymentMethod;
}
