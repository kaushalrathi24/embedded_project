import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemperatureModule } from './temperature/temperature.module';
import { NoiseModule } from './noise/noise.module';
import { PrismaModule } from './prisma/prisma.module';
import { HumidityModule } from './humidity/humidity.module';

@Module({
  imports: [TemperatureModule, NoiseModule, PrismaModule, HumidityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
