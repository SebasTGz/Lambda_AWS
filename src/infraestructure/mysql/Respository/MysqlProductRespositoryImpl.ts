import { inject, injectable } from "inversify";
import { Repository } from "typeorm";

import { TYPES } from "../../../ioc/Types";
import { Carro } from "../Entity/Carro";
import { MysqlProductRespository } from "./MysqlProductRespository";

@injectable()
export class MysqlProductRespositoryImpl implements MysqlProductRespository {
  constructor(
    @inject(TYPES.RepositoryProduct)
    private readonly productRepository: Repository<Carro>,
  ) {}

  async findById(id: number): Promise<Carro | null> {
    return (await this.productRepository.findOne({ where: { id } })) ?? null;
  }

  async findAll(): Promise<Carro[]> {
    return await this.productRepository.find();
  }

  async create(product: Carro): Promise<Carro> {
    console.log("product from repository", product);
    return await this.productRepository.save(product);
  }

  async update(product: Carro): Promise<Carro> {
    return await this.productRepository.save(product);
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
