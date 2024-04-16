import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FlameService } from './flame.service';
import { IngestDto } from './dto/ingest.dto';

@Controller('flame')
export class FlameController {

    constructor(private readonly flameService: FlameService) {}

  @Post('ingest')
  async ingest(@Body() ingestDto: IngestDto) {
    return await this.flameService.ingest(ingestDto);
  }

  @Get('current')
  async getCurrentFlame(@Query('room') room) {
    return await this.flameService.getCurrentFlame(parseInt(room));
}

}
