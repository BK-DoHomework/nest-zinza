import { Module } from '@nestjs/common';
import { RequestsController } from './requests.controller';
import { RequestsService } from './requests.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestRepository } from './request.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([RequestRepository])
  ],
  controllers: [RequestsController],
  providers: [RequestsService]
})
export class RequestsModule {}
