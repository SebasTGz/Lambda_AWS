import { DomainCarroEntity } from '../../../../../domain/Entities/DomainCarroEntity';
import { AdapterCarroEntity } from '../Entity/AdapterCarroEntity';
import { IAdapterMapper } from './IAdapterMapper';

export class AdapterMapperImpl implements IAdapterMapper {
  toDomain(adapterEntity: AdapterCarroEntity): DomainCarroEntity {
    return {
      id: adapterEntity.id,
      marca: adapterEntity.marca,
      modelo: adapterEntity.modelo,
      color: adapterEntity.color, //subcategoria
      anio: adapterEntity.anio, 
      precio: adapterEntity.precio,
      createdAt: adapterEntity.fechaCreacion,
      updatedAt: adapterEntity.fechaActualizacion,
      createdBy: adapterEntity.creadoPor,
      updatedBy: adapterEntity.actualizadoPor,
    };
  }
  toAdapter(domainEntity: DomainCarroEntity): AdapterCarroEntity {
    return {
      id: domainEntity.id,
      marca: domainEntity.marca,
      modelo: domainEntity.modelo,
      color: domainEntity.color,
      anio: domainEntity.anio, //categoria
      precio: domainEntity.precio,
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
