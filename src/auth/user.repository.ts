import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
  async signUp(authCredentiasDto: AuthCredentialsDto): Promise<void> {
    const { username, password, salt, email, gender, dob, avatar, is_active, created_at, created_by, leaveTime, position } = authCredentiasDto;
    const user = new User();
    user.username = username;
    user.password = password;
    user.salt = salt;
    user.email = email;
    user.gender = gender;
    user.dob = dob;
    user.avatar = avatar;
    user.is_active = is_active;
    user.created_at = created_at;
    user.created_by = created_by;
    user.leaveTime = leaveTime;
    user.position = position;

    try {
      await user.save()
    } catch (error) {
      // console.log(error.code)
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
