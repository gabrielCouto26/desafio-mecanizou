import { ApiProperty } from '@nestjs/swagger';

export class GetLocationDto {
    @ApiProperty()
    latitude: number

    @ApiProperty()
    longitude: number

    @ApiProperty()
    radius: number

    @ApiProperty()
    radiusType: string
}