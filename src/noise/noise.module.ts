import { Module } from '@nestjs/common';
import { NoiseService } from './noise.service';
import { NoiseController } from './noise.controller';

@Module({
  providers: [NoiseService],
  controllers: [NoiseController],
})
export class NoiseModule {}
