import { Controller, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { Request } from './request.entity';

@Controller('requests')
export class RequestsController {
  constructor(
    private requestService: RequestsService
  ) {

  }
  @Post()
  @UsePipes(ValidationPipe)
  createRequest(
    @Body() createRequestDto: CreateRequestDto,
  ): Promise<Request> {
    return this.requestService.createRequest(createRequestDto)
  }
}
