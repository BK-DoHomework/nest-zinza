import { IsNotEmpty } from "class-validator";

export class CreateRequestDto {
  @IsNotEmpty()
  request_content: string;

  @IsNotEmpty()
  created_at: string;
}