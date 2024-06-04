import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Workshop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  address: string;
  
  @Column({ type: 'float' })
  latitude: number;
  
  @Column({ type: 'float' })
  longitude: number;
}
