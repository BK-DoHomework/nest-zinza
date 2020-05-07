import { Repository, EntityRepository } from "typeorm";
import { Response } from "./response.entity";
import { CreateResponseDto } from "./dto/create-response.dto";


@EntityRepository(Response)
export class ResponseRepository extends Repository<Response>{

  async createResponse(
    createResponseDto: CreateResponseDto
  ): Promise<Response> {
    const { response_content, create_at, response_reasons, confirm_at, email } = createResponseDto;
    const response = new Response();
    response.response_content = response_content;
    response.create_at = create_at;
    response.response_reasons = response_reasons;
    response.confirm_at = confirm_at;
    response.email = email;
    await response.save();

    return response;
  }
}