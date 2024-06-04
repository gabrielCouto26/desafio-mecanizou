import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workshop } from '../../workshops/workshop.entity';
import { LocationService } from '../../location/location.service';
import { LocationServiceInterface } from '../../location/interface/service.interface';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Workshop)
    private readonly userRepository: Repository<Workshop>,
    @Inject(LocationService)
    private readonly locationService: LocationServiceInterface
  ) {}

  async seed() {
    const workshops = [
        { name: "RockCar", address: "Tijuca", latitude: -22.922042, longitude: -43.220729 },
        { name: "Oficina Afonso Pena", address: "Tijuca", latitude: -22.918505, longitude: -43.218012 },
        { name: "Oficina Maracanã", address: "Maracanã", latitude: -22.912650, longitude: -43.229204 },
        { name: "Oficina Botafogo", address: "Botafogo", latitude: -22.952602, longitude: -43.177887 },
    ];

    for (const workshop of workshops) {
        const created = await this.userRepository.save(workshop);
        await this.locationService.save(
          created.id, created.name, created.latitude, created.longitude)
    }
  }
}
