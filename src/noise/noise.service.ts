import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IngestDto } from './dto/ingest.dto';

@Injectable()
export class NoiseService {
  constructor(private readonly prisma: PrismaService) {}

  async ingest(ingestDto: IngestDto) {
    const { room, noise } = ingestDto;
    await this.prisma.noise.create({
      data: {
        room,
        noise,
      },
    });
  }

  async getCurrentNoise(room: number) {
    const noise = await this.prisma.noise.findFirst({
      where: {
        room,
      },
      select: {
        noise: true,
      },
      orderBy: {
        timestamp: 'desc',
      },
    });
    return noise;
  }

  async getPastNoise(room: number) {
    let now = new Date();
    now.setHours(now.getMinutes() - 10);
    const noise = await this.prisma.noise.findMany({
      where: {
        room,
        timestamp: {
          gte: now,
        },
      },
      select: {
        noise: true,
        timestamp: true,
      },
      orderBy: {
        timestamp: 'desc',
      },
    });
    return noise;
  }
}
