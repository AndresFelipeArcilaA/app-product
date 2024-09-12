import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('producto')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 55 })
  name: string;

  @Column({ name: 'cantidad', type: 'int' })
  quantity: number;

  @Column({ name: 'descripcion', type: 'varchar', length: 55 })
  description: string;

  @Column({ name: 'precio', type: 'numeric', precision: 6, scale: 2 })
  price: number;

  @Column({ name: 'imagen', type: 'varchar', length: 255 })
  image: string;
}
