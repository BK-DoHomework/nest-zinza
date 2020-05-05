import { Controller, Get, Query, ValidationPipe, Post, UsePipes, Body, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { ChecksService } from './checks.service';
import { CreateCheckDto } from './dto/create-check.dto'
import { Check } from './check.entity';
import { GetChecksFilterDto } from './dto/get-checks-filter.dto';

@Controller('checks')
export class ChecksController {
  constructor(
    private checksService: ChecksService
  ) {

  }

  @Get()
  getCheck(@Query(ValidationPipe) filterDto:GetChecksFilterDto):Promise<Check[]>{
    return this.checksService.getChecks(filterDto)
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCheck(@Body() createCheckDto: CreateCheckDto): Promise<Check> {
    return this.checksService.createCheck(createCheckDto)
  }

  @Get('/:id')
  getCheckById(@Param('id', ParseIntPipe) id: number): Promise<Check> {
    return this.checksService.getCheckById(id);
  }

  @Delete('/:id')
  deleteCheck(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.checksService.deleteCheck(id);
  }
}
