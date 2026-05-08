import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class users {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  email!: string;

  @Column({ type: 'int' })
  age!: number;
}
