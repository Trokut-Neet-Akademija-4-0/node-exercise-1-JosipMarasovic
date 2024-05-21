import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import  Customer  from "./Customer";
import  PaymentMethod  from "./PaymentMethod";
import  Products  from "./Products";

@Index("Basket_pkey", ["basketId"], { unique: true })
@Entity("Basket", { schema: "public" })
export  default class Basket  extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "bigint", name: "basket_id" })
  basketId!: number;

  @Column("bigint", { name: "price", nullable: true })
  price!: number | null;

  @Column("bigint", { name: "quantity", nullable: true })
  quantity!: number | null;

  @Column("bigint", { name: "discount_percentage", nullable: true })
  discountPercentage!: number | null;

  @Column("bigint", { name: "discount_amount", nullable: true })
  discountAmount!: number | null;

  @Column("bigint", { name: "price_with_discount", nullable: true })
  priceWithDiscount!: number | null;

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
