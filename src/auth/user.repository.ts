import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User>{
  async signUp(authCredentiasDto: AuthCredentialsDto): Promise<void> {
    const { username, password, email, gender, dob, avatar, is_active, created_at, created_by, leaveTime, position } = authCredentiasDto;

    const salt = await bcrypt.genSalt();
    const user = new User();
    user.username = username;
    user.salt = salt;
    user.password = await this.hashPassword(password, user.salt);
    // console.log('usePassword',user.password)
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
  async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    const { username, password } = authCredentialsDto;
    const user = await this.findOne({ username });

    if (user && await user.validatePassword(password)) {
      return user.username;
    } else {
      return null;
    }
  }


  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt)
  }

}
