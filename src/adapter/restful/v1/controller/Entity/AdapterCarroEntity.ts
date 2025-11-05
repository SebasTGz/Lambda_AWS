export interface AdapterCarroEntity {
  id?: number;
  marca: string; //categoria
  modelo: string; //modelo
  color: string; //subcategoria
  anio: number; //año
  precio: number; //precio
  fechaCreacion?: Date;
  fechaActualizacion?: Date;
  creadoPor: string;
  actualizadoPor: string;
}
