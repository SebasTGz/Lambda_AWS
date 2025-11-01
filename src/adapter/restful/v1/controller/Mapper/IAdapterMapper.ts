import { DomainCarroEntity } from "../../../../../domain/Entities/DomainCarroEntity";
import { AdapterCarroEntity } from "../Entity/AdapterCarroEntity";

export interface IAdapterMapper {
  toDomain(adapterEntity: AdapterCarroEntity): DomainCarroEntity;
  toAdapter(domainEntity: DomainCarroEntity): AdapterCarroEntity;
  toDomainList(adapterList: AdapterCarroEntity[]): DomainCarroEntity[];
  toAdapterList(domainList: DomainCarroEntity[]): AdapterCarroEntity[];
}
