export interface DomainCarroEntity {
  id?: number;
  name: string;
  description: string;
  price: number;
  marca: string; //categoria
  color: string; //subcategoria
  createdAt?: Date;
  updatedAt?: Date;
  createdBy: string;
  updatedBy: string;
}
