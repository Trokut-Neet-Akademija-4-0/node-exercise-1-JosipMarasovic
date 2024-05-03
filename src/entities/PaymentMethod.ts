import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import  BasketPaymentMethod  from "./BasketPaymentMethod";

@Index("PaymentMethod_pkey", ["methodId"], { unique: true })
@Entity("PaymentMethod", { schema: "public" })
export default class PaymentMethod  extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "bigint", name: "method_id" })
  methodId!: string;

  @Column("character varying", { name: "method_name", length: 60 })
  methodName!: string;

  @OneToMany(
    () => BasketPaymentMethod,
    (basketPaymentMethod) => basketPaymentMethod.method
  )
  basketPaymentMethods!: BasketPaymentMethod[];
}
