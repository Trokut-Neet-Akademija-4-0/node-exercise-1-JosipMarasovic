import {
  BaseEntity,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import  Products  from "./Products";

@Index("Popular_pkey", ["popularId"], { unique: true })
@Entity("Popular", { schema: "public" })
export  default class Popular  extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "bigint", name: "popular_id" })
  popularId!: string;

  @ManyToOne(() => Products, (products) => products.populars, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "productId" }])
  product!: Products;
}
