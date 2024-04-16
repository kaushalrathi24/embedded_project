import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IngestDto } from './dto/ingest.dto';

@Injectable()
export class TemperatureService {
  constructor(private readonly prisma: PrismaService) {}

  async ingest(ingestDto: IngestDto) {
    const { room, temperature } = ingestDto;
    await this.prisma.temperature.create({
      data: {
        room,
        temperature,
      },
    });
  }

  async getCurrentTemperature(room: number) {
    const temperature = await this.prisma.temperature.findFirst({
      where: {
        room,
      },
      select: {
        temperature: true,
      },
      orderBy: {
        timestamp: 'desc',
      },
    });
    return temperature;
  }

  async getPastTemperature(room: number) {
    let now = new Date();
    now.setMinutes(now.getMinutes() - 10);
    const temperature = await this.prisma.temperature.findMany({
      where: {
        room,
        timestamp: {
          gte: now,
        },
      },
      select: {
        temperature: true,
        timestamp: true,
      },
      orderBy: {
        timestamp: 'desc',
      },
    });

    return temperature;
  }
}
