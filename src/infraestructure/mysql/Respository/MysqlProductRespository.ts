import { Carro } from '../Entity/Carro';

export interface MysqlProductRespository {
  findById(id: number): Promise<Carro | null>;
  findAll(): Promise<Carro[]>;
  create(product: Carro): Promise<Carro>;
  update(product: Carro): Promise<Carro>;
  delete(id: number): Promise<void>;
}
