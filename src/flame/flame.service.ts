import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IngestDto } from './dto/ingest.dto';

@Injectable()
export class FlameService {

    constructor(private readonly prisma: PrismaService) {}

    async ingest(ingestDto: IngestDto) {
        const { room,safe } = ingestDto;
        await this.prisma.flame.create({
          data: {
            room,
            safe
          },
        });
      }

      async getCurrentFlame(room: number) {
        const flame = await this.prisma.flame.findFirst({
          where: {
            room,
          },
          select: {
            safe: true,
          },
          orderBy: {
            timestamp: 'desc',
          },
        });
        return flame;
      }

    }
