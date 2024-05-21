import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import  Basket from "./Basket";

@Index("Customer_pkey", ["customerId"], { unique: true })
@Entity("Customer", { schema: "public" })
export  default class Customer  extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "bigint", name: "customer_id" })
  customerId!: number;

  @Column("character varying", { name: "name", nullable: true, length: 60 })
  name!: string | null;

  @Column("character varying", { name: "lastName", nullable: true, length: 60 })
  lastName!: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 60 })
  email!: string | null;

  @Column("character varying", { name: "adress", nullable: true, length: 60 })
  adress!: string | null;

  @Column("character varying", { name: "city", nullable: true, length: 60 })
  city!: string | null;

  @Column("bigint", { name: "zipCode", nullable: true })
  zipCode!: number | null;

  @Column("text", { name: "deliveryInstructions", nullable: true })
  deliveryInstructions!: string | null;

  @OneToMany(() => Basket, (basket) => basket.customer)
  baskets!: Basket[];
}
