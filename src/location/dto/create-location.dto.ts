import { ApiProperty } from '@nestjs/swagger';

export class CreateLocationDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    name: string

    @ApiProperty()
    latitude: number

    @ApiProperty()
    longitude: number    
}