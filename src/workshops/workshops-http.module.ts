import { Module } from '@nestjs/common';
import { WorkshopModule } from './workshops.module';
import { WorkshopService } from './workshops.service';
import { WorkshopController } from './workshops.controller';
import { LocationModule } from '../location/location.module';

@Module({
  imports: [WorkshopModule, LocationModule],
  providers: [WorkshopService],
  controllers: [WorkshopController]
})
export class WorkshopHttpModule {}
