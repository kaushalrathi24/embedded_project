import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IngestDto } from './dto/ingest.dto';

@Injectable()
export class HumidityService {
  constructor(private readonly prisma: PrismaService) {}

  async ingest(ingestDto: IngestDto) {
    const { room, humidity } = ingestDto;
    await this.prisma.humidity.create({
      data: {
        room,
        humidity,
      },
    });
  }

  async getCurrentHumidity(room: number) {
    const humidity = await this.prisma.humidity.findFirst({
      where: {
        room,
      },
      select: {
        humidity: true,
      },
      orderBy: {
        timestamp: 'desc',
      },
    });
    return humidity;
  }

  async getPastHumidity(room: number) {
    let now = new Date();
    now.setHours(now.getMinutes() - 10);
    const humidity = await this.prisma.humidity.findMany({
      where: {
        room,
        timestamp: {
          gte: now,
        },
      },
      select: {
        humidity: true,
        timestamp: true,
      },
      orderBy: {
        timestamp: 'desc',
      },
    });

    return humidity;
  }
}
