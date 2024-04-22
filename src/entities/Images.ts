import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";

@Index("images_pkey", ["imageId"], { unique: true })
@Entity("images", { schema: "public" })
export class Images {
  @PrimaryGeneratedColumn({ type: "bigint", name: "image_id" })
  imageId!: string;

  @Column("text", { name: "imageUrl" })
  imageUrl!: string;

  @ManyToOne(() => Products, (products) => products.images2)
  @JoinColumn([{ name: "product_id", referencedColumnName: "productId" }])
  product!: Products;
}
