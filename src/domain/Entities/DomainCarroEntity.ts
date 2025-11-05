export interface DomainCarroEntity {
  id?: number;
  marca: string;
  modelo: string;
  color: string; //categoria
  anio: number;
  precio: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy: string;
  updatedBy: string;
}
