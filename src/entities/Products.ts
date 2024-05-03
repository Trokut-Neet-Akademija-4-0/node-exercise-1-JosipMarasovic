import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import  Basket  from "./Basket";
import  Images  from "./Images";
import  Productcategory  from "./Productcategory";

@Index("Products_pkey", ["productId"], { unique: true })
@Entity("Products", { schema: "public" })
export default class Products  extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "bigint", name: "product_id" })
  productId!: string;

  @Column("character varying", { name: "title", length: 60 })
  title!: string;

  @Column("character varying", { name: "description", length: 60 })
  description!: string;

  @Column("int8", { name: "price", array: true })
  price!: string[];

  @Column("bigint", { name: "discountPercentage" })
  discountPercentage!: string;

  @Column("int8", { name: "quantity", array: true })
  quantity!: string[];

  @Column("character varying", { name: "category", length: 60 })
  category!: string;

  @Column("character varying", { name: "thumbnail", length: 60 })
  thumbnail!: string;

  @Column("text", { name: "images" })
  images!: string;

  @Column("boolean", { name: "popular", nullable: true })
  popular!: boolean | null;

  @OneToMany(() => Basket, (basket) => basket.product)
  baskets!: Basket[];

  @OneToMany(() => Images, (images) => images.product)
  images2!: Images[];

  @OneToMany(
    () => Productcategory,
    (productcategory) => productcategory.product
  )
  productcategories!: Productcategory[];
}
