export interface AdapterCarroEntity {
  id?: number;
  nombre: string;
  descripcion: string;
  precio: number;
  marca: string; //categoria
  color: string; //subcategoria
  fechaCreacion?: Date;
  fechaActualizacion?: Date;
  creadoPor: string;
  actualizadoPor: string;
}
