import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestRepository } from './request.repository';
import { Request } from './request.entity';
import { CreateRequestDto } from './dto/create-request.dto';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(RequestRepository)
    private requestRepository: RequestRepository,

  ) { }

  async createRequest(
    createRequestDto: CreateRequestDto
  ): Promise<Request> {
    return this.requestRepository.createRequest(createRequestDto)
  }
}
