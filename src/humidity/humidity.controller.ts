import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { IngestDto } from './dto/ingest.dto';
import { HumidityService } from './humidity.service';

@Controller('humidity')
export class HumidityController {
  constructor(private readonly humidityService: HumidityService) {}

  @Post('ingest')
  async ingest(@Body() ingestDto: IngestDto) {
    return await this.humidityService.ingest(ingestDto);
  }

  @Get('current')
  async getCurrentHumidity(@Query('room') room) {
    return await this.humidityService.getCurrentHumidity(parseInt(room));
  }

  @Get('history')
  async getPastHumidity(@Query('room') room) {
    return await this.humidityService.getPastHumidity(parseInt(room));
  }
}
