import { DomainCarroEntity } from '../../domain/Entities/DomainCarroEntity';

export interface ProductService {
  getProductById(id: number): Promise<DomainCarroEntity>;
  getProducts(): Promise<DomainCarroEntity[]>;
  createProduct(product: DomainCarroEntity): Promise<DomainCarroEntity>;
  updateProduct(id: number, product: DomainCarroEntity): Promise<DomainCarroEntity>;
  deleteProduct(id: number): Promise<void>;
}
