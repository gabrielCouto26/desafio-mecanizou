import { Module } from '@nestjs/common';
import { WorkshopModule } from './workshops.module';
import { WorkshopService } from './workshops.service';
import { WorkshopController } from './workshops.controller';

@Module({
  imports: [WorkshopModule],
  providers: [WorkshopService],
  controllers: [WorkshopController]
})
export class WorkshopHttpModule {}
