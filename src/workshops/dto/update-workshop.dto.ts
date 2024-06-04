import { ApiProperty } from '@nestjs/swagger';

export class UpdateWorkshopDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    latitude: number;

    @ApiProperty()
    longitude: number;
}