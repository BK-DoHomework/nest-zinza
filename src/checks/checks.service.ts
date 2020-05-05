import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CheckRepository } from './check.repository';
import { Check } from './check.entity';
import { CreateCheckDto } from './dto/create-check.dto';
import { GetChecksFilterDto } from './dto/get-checks-filter.dto';

@Injectable()
export class ChecksService {
  constructor(
    @InjectRepository(CheckRepository)
    private checkRepository: CheckRepository,
  ) { }

  async createCheck(createCheckDto: CreateCheckDto): Promise<Check> {
    return this.checkRepository.createCheck(createCheckDto);
  }

  async getChecks(filterDto:GetChecksFilterDto):Promise<Check[]>{
    return this.checkRepository.getChecks(filterDto);
  }

  async getCheckById(id: number): Promise<Check> {
    const found = await this.checkRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }

  async deleteCheck(id: number): Promise<void> {
    const result = await this.checkRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }
}
