import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkshopService } from './workshops.service';
import { WorkshopController } from './workshops.controller';
import { Workshop } from './workshop.entity';
import { LocationModule } from '../location/location.module';

@Module({
  imports: [TypeOrmModule.forFeature([Workshop]), LocationModule],
  providers: [WorkshopService],
  controllers: [WorkshopController],
})
export class WorkshopModule {}