import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data-source'
import { WorkshopModule } from './workshops/workshops.module';
import { SeederModule } from './db/seeders/seeder.module';
import { SeederService } from './db/seeders/seeder.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    WorkshopModule,
    SeederModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule implements OnModuleInit {
  constructor(private readonly seederService: SeederService) {}

  async onModuleInit() {
    await this.seederService.seed()
  }
}
