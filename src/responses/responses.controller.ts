import { Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { Response } from './response.entity';

@Controller('responses')
export class ResponsesController {
  constructor(
    private responsesService:ResponsesService
  ){

  }
  @Post()
  @UsePipes(ValidationPipe)
  createResponse(createResponseDto:CreateResponseDto):Promise<Response>{
    return this.responsesService.createResponse(createResponseDto)
  }
}
