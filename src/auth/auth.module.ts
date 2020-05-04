import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository])
    //Không import sẽ xuất hiệ lỗi :Nest can't resolve dependencies of the AuthService (?). Please make sure that the argument UserRepository at index [0] is available in the AuthModule context.
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
