import { Module } from '@nestjs/common';
import { HumidityService } from './humidity.service';
import { HumidityController } from './humidity.controller';

@Module({
  providers: [HumidityService],
  controllers: [HumidityController],
})
export class HumidityModule {}
