import { Repository, EntityRepository } from "typeorm";
import { Request } from "./request.entity";
import { CreateRequestDto } from "./dto/create-request.dto";
import { RequestType } from "./request-types.enum";


@EntityRepository(Request)
export class RequestRepository extends Repository<Request>{
  async createRequest(
    createRequestDto: CreateRequestDto
  ): Promise<Request> {
    const { request_content, created_at } = createRequestDto;
    const request = new Request();
    request.request_content = request_content;
    request.created_at = created_at;
    request.type = RequestType.SHORT_TERM_LEAVE;

    await request.save()
    return request;
  }
}