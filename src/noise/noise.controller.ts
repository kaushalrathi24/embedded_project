import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { IngestDto } from './dto/ingest.dto';
import { NoiseService } from './noise.service';

@Controller('noise')
export class NoiseController {
  constructor(private readonly noiseService: NoiseService) {}

  @Post('ingest')
  async ingest(@Body() ingestDto: IngestDto) {
    return await this.noiseService.ingest(ingestDto);
  }

  @Get('current')
  async getCurrentNoise(@Query('room') room: string) {
    return await this.noiseService.getCurrentNoise(parseInt(room));
  }

  @Get('history')
  async getPastNoise(@Query('room') room: string) {
    return await this.noiseService.getPastNoise(parseInt(room));
  }
}
