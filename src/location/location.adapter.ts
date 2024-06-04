import { Inject, Injectable, OnModuleDestroy } from "@nestjs/common";
import { Redis } from "ioredis";
import { LocationAdapterInterface } from "./interface/adapter.interface";

type RadiusType = 'km' | 'm'

@Injectable()
export class LocationAdapter implements LocationAdapterInterface, OnModuleDestroy {
    constructor(
        @Inject('RedisClient') private readonly redisClient: Redis
    ) {}

    onModuleDestroy(): void {
        this.redisClient.disconnect()
    }

    async getByRadius(
        latitude: number,
        longitude: number,
        radius: number,
        radiusType: RadiusType
    ): Promise<unknown[]> {
        const result = await this.redisClient.geosearch(
            'workshops', 'FROMLONLAT', latitude, longitude, 'BYRADIUS', radius, radiusType, 'WITHDIST')
        return result
    }

    async save(
        id: number,
        name: string,
        latitude: number,
        longitude: number
    ): Promise<void> {
        await this.redisClient.geoadd(
            'workshops', latitude, longitude, `${name}:${id}`)
    }
}