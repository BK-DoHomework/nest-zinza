import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {

  }
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return await this.userRepository.signUp(authCredentialsDto);
  }

  //https://github.com/nestjs/jwt
  //https://github.com/nestjs/passport
  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {

    const username = await this.userRepository.validateUserPassword(authCredentialsDto);
    // console.log('username', username);
    if (!username) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload);

    //https://docs.nestjs.com/techniques/logger
    return { accessToken };

  }
}
