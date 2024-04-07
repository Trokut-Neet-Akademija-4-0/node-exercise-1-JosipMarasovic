import productsDetailList from "../models/productDetailModel";
import { IProductDetail } from "../models/interfaces/productDetailInterface";


class ProductDetailService{
    private productsDetailList: IProductDetail [] = productsDetailList

    
    getAllProducts() :IProductDetail[] {
        return this.productsDetailList

    }
    
    getProductById(id: number): IProductDetail | undefined {
        return this.productsDetailList.find(product => product.id === id);
    }




}


export default new ProductDetailService()