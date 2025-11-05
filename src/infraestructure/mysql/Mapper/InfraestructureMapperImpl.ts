import { DomainCarroEntity } from '../../../domain/Entities/DomainCarroEntity';
import { Carro } from '../Entity/Carro';
import { IInfraestructureMapper } from './IIfraestructureMapper';

export class InfraestructureMapperImpl implements IInfraestructureMapper {
  toDomain(entity: Carro): DomainCarroEntity {
    return {
      id: entity.id,
      marca: entity.carroMarca, 
      modelo: entity.carroModelo,
      color: entity.carroColor, //subcategoria
      anio: entity.carroAnio, //categoria
      precio: entity.carroPrecio, //precio
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      createdBy: entity.createdBy,
      updatedBy: entity.updatedBy,
    };
  }
  toEntity(domain: DomainCarroEntity): Carro {
    return {
      id: domain.id,
      carroMarca: domain.marca, //marca
      carroModelo:domain.modelo,
      carroColor: domain.color, //color
      carroAnio: domain.anio, //año
      carroPrecio: domain.precio, //precio
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
