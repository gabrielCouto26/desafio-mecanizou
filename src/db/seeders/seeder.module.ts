import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './seeder.service';
import { Workshop } from '../../workshops/workshop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workshop])],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
