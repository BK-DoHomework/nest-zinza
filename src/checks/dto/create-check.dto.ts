import { IsNotEmpty } from 'class-validator';


export class CreateCheckDto {
  @IsNotEmpty()
  timeIn: string;

  @IsNotEmpty()
  timeOut: string;
}