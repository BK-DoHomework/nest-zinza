import { Repository, EntityRepository } from "typeorm";
import { Check } from "./check.entity";
import { CreateCheckDto } from "./dto/create-check.dto";
import { GetChecksFilterDto } from "./dto/get-checks-filter.dto";
import { User } from "src/auth/user.entity";

@EntityRepository(Check)
export class CheckRepository extends Repository<Check>{


  async createCheck(
    createCheckDto: CreateCheckDto,
    user: User
  ): Promise<Check> {
    const { timeIn, timeOut } = createCheckDto;

    const check = new Check();
    check.timeIn = timeIn;
    check.timeOut = timeOut;
    check.user = user;
    console.log('user', user);
    await check.save()
    return check;
  }

  async getChecks(filterDto: GetChecksFilterDto): Promise<Check[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder('check');
    if (search) {
      query.andWhere('(check.timeIn LIKE :search OR check.timeOut LIKE :search)', { search: `%${search}%` });
    }
    const checks = await query.getMany();
    return checks;
  }

}