import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WorkshopService } from './workshops.service';
import { LocationService } from '../location/location.service';
import { Workshop } from './workshop.entity';
import { CreateWorkshopDto } from './dto/create-workshop.dto';
import { UpdateWorkshopDto } from './dto/update-workshop.dto';
import { GetLocationDto } from '../location/dto/get-location.dto';

@Controller('workshops')
export class WorkshopController {
  constructor(
    private readonly workshopsService: WorkshopService,
    private readonly locationService: LocationService
  ) {}

  @Post('/location')
  async location(@Body() getLocationDto: GetLocationDto): Promise<unknown[]> {
    const { latitude, longitude, radius, radiusType } = getLocationDto
    return await this.locationService.getByRadius(
      latitude, longitude, radius, radiusType);
  }

  @Get()
  async findAll(): Promise<Workshop[]> {
    return await this.workshopsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Workshop> {
    return await this.workshopsService.findOne(+id);
  }

  @Post()
  async create(@Body() createWorkshopDto: CreateWorkshopDto): Promise<Workshop> {
    return await this.workshopsService.create(createWorkshopDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWorkshopDto: UpdateWorkshopDto
  ): Promise<Workshop> {
    return await this.workshopsService.update(+id, updateWorkshopDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.workshopsService.remove(+id);
  }
}
