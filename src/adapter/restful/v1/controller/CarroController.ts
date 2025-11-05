import { AdapterCarroEntity } from "./Entity/AdapterCarroEntity";

export interface ProductController {
  handleRequest(event: any): Promise<any>;
  getProducts(): Promise<AdapterCarroEntity[]>;
  getProductById(id: number): Promise<AdapterCarroEntity>;
  createProduct(product: AdapterCarroEntity): Promise<AdapterCarroEntity>;
  updateProduct(
    id: number,
    product: AdapterCarroEntity,
  ): Promise<AdapterCarroEntity>;
  deleteProduct(id: number): Promise<void>;
}
