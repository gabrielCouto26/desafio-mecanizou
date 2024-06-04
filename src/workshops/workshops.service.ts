import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workshop } from './workshop.entity';
import { Workshop as IWorkshop } from './interface/workshop.interface';

@Injectable()
export class WorkshopService {
  constructor(
    @InjectRepository(Workshop)
    private workshopsRepository: Repository<Workshop>,
  ) {}

  async findAll(): Promise<Workshop[]> {
    return await this.workshopsRepository.find();
  }

  async findOne(id: number): Promise<Workshop | null> {
    return await this.workshopsRepository.findOneBy({ id });
  }

  async create(workshop: IWorkshop): Promise<Workshop> {
    return await this.workshopsRepository.save(workshop);
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