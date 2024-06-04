import { Inject, Injectable } from "@nestjs/common";
import { LocationServiceInterface } from "./interface/service.interface";
import { LocationAdapter } from "./location.adapter";
import { LocationAdapterInterface } from "./interface/adapter.interface";

@Injectable()
export class LocationService implements LocationServiceInterface {
    constructor(
        @Inject(LocationAdapter) private readonly adapter: LocationAdapterInterface
    ) {}

    async getByRadius(
        latitude: number,
        longitude: number,
        radius: number,
        radiusType: string
    ): Promise<unknown[]> {
        return this.adapter.getByRadius(
            latitude, longitude, radius, radiusType)
    }

    async save(
        id: number,
        name: string,
        latitude: number,
        longitude: number
    ): Promise<void> {
        await this.adapter.save(id, name, latitude, longitude)
    }
}