import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './seeder.service';
import { Workshop } from '../../workshops/workshop.entity';
import { LocationModule } from '../../location/location.module';

@Module({
  imports: [TypeOrmModule.forFeature([Workshop]), LocationModule],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
