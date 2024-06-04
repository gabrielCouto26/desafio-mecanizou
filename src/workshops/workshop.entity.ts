import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Workshop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  address: string;
  
  @Column()
  latitude: number;
  
  @Column()
  longitude: number;
}
