import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workshop } from './workshop.entity';
import { Workshop as IWorkshop } from './interface/workshop.interface';
import { LocationService } from '../location/location.service';
import { LocationServiceInterface } from '../location/interface/service.interface';

@Injectable()
export class WorkshopService {
  constructor(
    @InjectRepository(Workshop)
    private workshopsRepository: Repository<Workshop>,
    @Inject(LocationService)
    private locationService: LocationServiceInterface
  ) {}

  async findAll(): Promise<Workshop[]> {
    return await this.workshopsRepository.find();
  }

  async findOne(id: number): Promise<Workshop | null> {
    return await this.workshopsRepository.findOneBy({ id });
  }

  async create(workshop: IWorkshop): Promise<Workshop> {
    const created = await this.workshopsRepository.save(workshop);
    await this.locationService.save(
      workshop.id, workshop.name, workshop.latitude, workshop.longitude)
    return created
  }

  async update(id: number, params: IWorkshop): Promise<Workshop | null> {
    let workshop = await this.workshopsRepository.findOneBy({ id })
    if (!workshop)
      return null

    let updated = this.workshopsRepository.merge(workshop, params)
    return await this.workshopsRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    await this.workshopsRepository.delete(id);
  }
}