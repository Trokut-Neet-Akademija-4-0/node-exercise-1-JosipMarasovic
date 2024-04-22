import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";
import { BasketCustomer } from "./BasketCustomer";
import { BasketPaymentMethod } from "./BasketPaymentMethod";

@Index("Basket_pkey", ["basketId"], { unique: true })
@Entity("Basket", { schema: "public" })
export class Basket {
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

  @ManyToOne(() => Products, (products) => products.baskets)
  @JoinColumn([{ name: "product_id", referencedColumnName: "productId" }])
  product!: Products;

  @OneToMany(() => BasketCustomer, (basketCustomer) => basketCustomer.basket)
  basketCustomers!: BasketCustomer[];

  @OneToMany(
    () => BasketPaymentMethod,
    (basketPaymentMethod) => basketPaymentMethod.basket
  )
  basketPaymentMethods!: BasketPaymentMethod[];
}
