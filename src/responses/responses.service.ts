import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseRepository } from './response.repository';
import { Response } from './response.entity';
import { CreateResponseDto } from './dto/create-response.dto';

@Injectable()
export class ResponsesService {
  constructor(
    @InjectRepository(ResponseRepository)
    private responseRepository: ResponseRepository
  ) { }
  async createResponse(
    createResponseDto: CreateResponseDto
  ): Promise<Response> {
    return this.responseRepository.createResponse(createResponseDto);
  }
}
