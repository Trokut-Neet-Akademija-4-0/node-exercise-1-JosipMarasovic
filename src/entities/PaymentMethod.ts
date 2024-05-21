import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import  Basket  from "./Basket";

@Index("PaymentMethod_pkey", ["methodId"], { unique: true })
@Entity("PaymentMethod", { schema: "public" })
export  default class PaymentMethod  extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "bigint", name: "method_id" })
  methodId!: string;

  @Column("character varying", {
    name: "method_name",
    nullable: true,
    length: 60,
  })
  methodName!: string | null;

  @OneToMany(() => Basket, (basket) => basket.method)
  baskets!: Basket[];
}
