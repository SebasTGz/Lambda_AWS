import "reflect-metadata";

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("carro")
export class Carro {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id!: number;

  @Column({ type: "varchar", length: 255 })
  productName!: string;

  @Column({ type: "varchar", length: 255 })
  productDescription!: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  productPrice!: number;

  @Column({ type: "varchar", length: 255 })
  carroMarca!: string; //categoria

  @Column({ type: "varchar", length: 255 })
  carroColor!: string; //subcategoria

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
