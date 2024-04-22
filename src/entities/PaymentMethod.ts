import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasketPaymentMethod } from "./BasketPaymentMethod";

@Index("PaymentMethod_pkey", ["methodId"], { unique: true })
@Entity("PaymentMethod", { schema: "public" })
export class PaymentMethod {
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
