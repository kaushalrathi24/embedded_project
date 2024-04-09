import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { IngestDto } from './dto/ingest.dto';
import { TemperatureService } from './temperature.service';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Post('ingest')
  async ingest(@Body() ingestDto: IngestDto) {
    return await this.temperatureService.ingest(ingestDto);
  }

  @Get('current')
  async getCurrentTemperature(@Query('room') room: string) {
    return await this.temperatureService.getCurrentTemperature(parseInt(room));
  }

  @Get('history')
  async getPastTemperature(@Query('room') room: string) {
    return await this.temperatureService.getPastTemperature(parseInt(room));
  }
}
