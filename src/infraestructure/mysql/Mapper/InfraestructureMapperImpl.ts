import { DomainCarroEntity } from '../../../domain/Entities/DomainCarroEntity';
import { Carro } from '../Entity/Carro';
import { IInfraestructureMapper } from './IIfraestructureMapper';

export class InfraestructureMapperImpl implements IInfraestructureMapper {
  toDomain(entity: Carro): DomainCarroEntity {
    return {
      id: entity.id,
      name: entity.productName,
      description: entity.productDescription,
      price: entity.productPrice,
      marca: entity.carroMarca, //categoria
      color: entity.carroColor, //subcategoria
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      createdBy: entity.createdBy,
      updatedBy: entity.updatedBy,
    };
  }
  toEntity(domain: DomainCarroEntity): Carro {
    return {
      id: domain.id,
      productName: domain.name,
      productDescription: domain.description,
      productPrice: domain.price,
      carroMarca: domain.marca, //marca
      carroColor: domain.color, //color
      createdAt: domain.createdAt,
      updatedAt: domain.updatedAt,
      createdBy: domain.createdBy,
      updatedBy: domain.updatedBy,
    } as Carro;
  }
  toDomainList(entityList: Carro[]): DomainCarroEntity[] {
    return entityList.map(this.toDomain);
  }
  toEntityList(domainList: DomainCarroEntity[]): Carro[] {
    return domainList.map(this.toEntity);
  }
}
