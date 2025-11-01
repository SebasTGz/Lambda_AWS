import { DomainCarroEntity } from '../../../domain/Entities/DomainCarroEntity';
import { Carro } from '../Entity/Carro';

export interface IInfraestructureMapper {
  toDomain(entity: Carro): DomainCarroEntity;
  toEntity(domain: DomainCarroEntity): Carro;
  toDomainList(entityList: Carro[]): DomainCarroEntity[];
  toEntityList(domainList: DomainCarroEntity[]): Carro[];
}
