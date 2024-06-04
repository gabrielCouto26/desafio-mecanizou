import { Module } from '@nestjs/common';
import { LocationService } from '../location/location.service';
import { LocationAdapter } from './location.adapter';
import { redisClientFactory } from './factories/redis.factory';

@Module({
  providers: [LocationService, LocationAdapter, redisClientFactory],
  exports: [LocationService]
})
export class LocationModule {}