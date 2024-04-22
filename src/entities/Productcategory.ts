import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Category } from "./Category";
import { Products } from "./Products";

@Entity("productcategory", { schema: "public" })
export class Productcategory {
  @ManyToOne(() => Category, (category) => category.productcategories)
  @JoinColumn([{ name: "category_id", referencedColumnName: "categoryId" }])
  category: Category = new Category;

  @ManyToOne(() => Products, (products) => products.productcategories)
  @JoinColumn([{ name: "product_id", referencedColumnName: "productId" }])
  product: Products = new Products;
}
