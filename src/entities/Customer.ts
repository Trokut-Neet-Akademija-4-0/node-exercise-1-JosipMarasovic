import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Customer_pkey", ["customerId"], { unique: true })
@Entity("Customer", { schema: "public" })
export class Customer {
  @PrimaryGeneratedColumn({ type: "bigint", name: "customer_id" })
  customerId!: string;

  @Column("character varying", { name: "name", length: 60 })
  name!: string;

  @Column("character varying", { name: "lastName", length: 60 })
  lastName!: string;

  @Column("character varying", { name: "email", length: 60 })
  email!: string;

  @Column("character varying", { name: "adress", length: 60 })
  adress!: string;

  @Column("character varying", { name: "city", length: 60 })
  city!: string;

  @Column("bigint", { name: "zipCode" })
  zipCode!: string;

  @Column("text", { name: "deliveryInstructions" })
  deliveryInstructions!: string;
}
