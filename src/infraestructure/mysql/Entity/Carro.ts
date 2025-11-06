import "reflect-metadata";

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("carro")
export class Carro {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 255 })
  carroMarca!: string; //marca

  @Column({ type: "varchar", length: 255 })
  carroModelo!: string; //modelo

  @Column({ type: "varchar", length: 255 })
  carroColor!: string; //color

  @Column({ type: "int"})
  carroAnio!: number; //año

  @Column({ type: "decimal", precision: 10, scale: 2 })
  carroPrecio!: number; //precio

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt!: Date;

  @Column({ type: "varchar", length: 255 })
  createdBy!: string;

  @Column({ type: "varchar", length: 255 })
  updatedBy!: string;
}
