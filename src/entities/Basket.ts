import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customer } from "./Customer";
import { PaymentMethod } from "./PaymentMethod";
import { Products } from "./Products";

@Index("Basket_pkey", ["basketId"], { unique: true })
@Entity("Basket", { schema: "public" })
export default class Basket  extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "bigint", name: "basket_id" })
  basketId!: string;

  @Column("bigint", { name: "price" })
  price!: string;

  @Column("bigint", { name: "quantity" })
  quantity!: string;

  @Column("bigint", { name: "discount_percentage" })
  discountPercentage!: string;

  @Column("bigint", { name: "discount_amount" })
  discountAmount!: string;

  @Column("bigint", { name: "price_with_discount" })
  priceWithDiscount!: string;

  @ManyToOne(() => Customer, (customer) => customer.baskets)
  @JoinColumn([{ name: "customer_id", referencedColumnName: "customerId" }])
  customer!: Customer;

  @ManyToOne(() => PaymentMethod, (paymentMethod) => paymentMethod.baskets)
  @JoinColumn([{ name: "method_id", referencedColumnName: "methodId" }])
  method!: PaymentMethod;

  @ManyToOne(() => Products, (products) => products.baskets)
  @JoinColumn([{ name: "product_id", referencedColumnName: "productId" }])
  product!: Products;
}
