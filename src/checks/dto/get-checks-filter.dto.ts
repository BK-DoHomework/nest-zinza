
import { IsOptional, IsNotEmpty } from 'class-validator';

export class GetChecksFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}