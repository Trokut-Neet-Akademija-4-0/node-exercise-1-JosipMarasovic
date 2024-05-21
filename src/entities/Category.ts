import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import  Products  from "./Products";

@Index("category_pkey", ["categoryId"], { unique: true })
@Entity("category", { schema: "public" })
export  default class Category  extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "bigint", name: "category_id" })
  categoryId!: number;

  @Column("character varying", {
    name: "categoryname",
    nullable: true,
    length: 60,
  })
  categoryname!: string | null;

  @OneToMany(() => Products, (products) => products.category)
  products!: Products[];
}
