import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkshopService } from './workshops.service';
import { WorkshopController } from './workshops.controller';
import { Workshop } from './workshop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workshop])],
  providers: [WorkshopService],
  controllers: [WorkshopController],
})
export class WorkshopModule {}