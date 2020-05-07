import { Module } from '@nestjs/common';
import { ResponsesController } from './responses.controller';
import { ResponsesService } from './responses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseRepository } from './response.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([ResponseRepository])
  ],
  controllers: [ResponsesController],
  providers: [ResponsesService]
})
export class ResponsesModule {}
