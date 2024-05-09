import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import  Products  from "./Products";

@Index("images_pkey", ["imageId"], { unique: true })
@Entity("images", { schema: "public" })
export  default class Images  extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "bigint", name: "image_id" })
  imageId!: string;

  @Column("text", { name: "imageUrl", nullable: true })
  imageUrl!: string | null;

  @ManyToOne(() => Products, (products) => products.images)
  @JoinColumn([{ name: "product_id", referencedColumnName: "productId" }])
  product!: Products;
}
