import { IsNotEmpty } from "class-validator";

export class CreateResponseDto {
  @IsNotEmpty()
  response_content:string;

  @IsNotEmpty()
  create_at: string;

  @IsNotEmpty()
  response_reasons:string;

  @IsNotEmpty()
  confirm_at:string;

  @IsNotEmpty()
  email: string;
}