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
import  Images  from "./Images";

@Index("Products_pkey", ["productId"], { unique: true })
@Entity("Products", { schema: "public" })
export  default class Products  extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "bigint", name: "product_id" })
  productId!: number;

  @Column("character varying", { name: "title", nullable: true, length: 60 })
  title!: string | null;

  @Column("text", {
    name: "description",
    nullable: true,
    
  })
  description!: string | null;

  @Column("bigint", { name: "price", nullable: true })
  price!: number | null;

  @Column("bigint", { name: "discountPercentage", nullable: true })
  discountPercentage!: number | null;

  @Column("bigint", { name: "quantity", nullable: true })
  quantity!: number | null;

  @Column("text", { name: "thumbnail", nullable: true })
  thumbnail!: string | null;

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
  category!: Category ;

  @OneToMany(() => Images, (images) => images.product)
  images!: Images[];
}
