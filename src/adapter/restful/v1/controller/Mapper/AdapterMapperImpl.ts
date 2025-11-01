import { DomainCarroEntity } from '../../../../../domain/Entities/DomainCarroEntity';
import { AdapterCarroEntity } from '../Entity/AdapterCarroEntity';
import { IAdapterMapper } from './IAdapterMapper';

export class AdapterMapperImpl implements IAdapterMapper {
  toDomain(adapterEntity: AdapterCarroEntity): DomainCarroEntity {
    return {
      id: adapterEntity.id,
      name: adapterEntity.nombre,
      description: adapterEntity.descripcion,
      price: adapterEntity.precio,
      marca: adapterEntity.marca, //categoria
      color: adapterEntity.color, //subcategoria
      createdAt: adapterEntity.fechaCreacion,
      updatedAt: adapterEntity.fechaActualizacion,
      createdBy: adapterEntity.creadoPor,
      updatedBy: adapterEntity.actualizadoPor,
    };
  }
  toAdapter(domainEntity: DomainCarroEntity): AdapterCarroEntity {
    return {
      id: domainEntity.id,
      nombre: domainEntity.name,
      descripcion: domainEntity.description,
      precio: domainEntity.price,
      marca: domainEntity.marca, //categoria
      color: domainEntity.color,
      fechaCreacion: domainEntity.createdAt,
      fechaActualizacion: domainEntity.updatedAt,
      creadoPor: domainEntity.createdBy,
      actualizadoPor: domainEntity.updatedBy,
    };
  }
  toDomainList(adapterList: AdapterCarroEntity[]): DomainCarroEntity[] {
    return adapterList.map(this.toDomain);
  }
  toAdapterList(domainList: DomainCarroEntity[]): AdapterCarroEntity[] {
    return domainList.map(this.toAdapter);
  }
}
