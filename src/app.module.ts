import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data-source'
import { WorkshopModule } from './workshops/workshops.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    WorkshopModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
