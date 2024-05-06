import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import  Basket  from "./Basket";
import  Popular  from "./Popular";
import  Category  from "./Category";
import   Images  from "./Images";

@Index("Products_pkey", ["productId"], { unique: true })
@Entity("Products", { schema: "public" })
export  default class Products  extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "bigint", name: "product_id" })
  productId!: number;

  @Column("character varying", { name: "title", length: 60 })
  title!: string;

  @Column("character varying", { name: "description", length: 60 })
  description!: string;

  @Column("int8", { name: "price" })
  price!: number;

  @Column("bigint", { name: "discountPercentage" })
  discountPercentage!: number;

  @Column("int8", { name: "quantity" })
  quantity!: number;

  @Column("character varying", { name: "thumbnail", length: 1024 })
  thumbnail!: string;

  @Column("boolean", { name: "popular", nullable: true })
  popular!: boolean | null;

  @OneToMany(() => Basket, (basket) => basket.product)
  baskets!: Basket[];

  @OneToMany(() => Popular, (popular) => popular.product)
  populars!: Popular[];

  @ManyToOne(() => Category, (category) => category.products, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "category_id", referencedColumnName: "categoryId" }])
  category: Category = new Category;

  @OneToMany(() => Images, (images) => images.product)
  images!: Images[];
}
