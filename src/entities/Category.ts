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
export  default class Category extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "category_id" })
  categoryId!: string;

  @Column("character varying", { name: "categoryname", length: 60 })
  categoryname!: string;

  @OneToMany(() => Products, (products) => products.category)
  products!: Products[];
}
