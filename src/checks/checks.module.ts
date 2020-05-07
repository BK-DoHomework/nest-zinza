import { Module } from '@nestjs/common';
import { ChecksController } from './checks.controller';
import { ChecksService } from './checks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckRepository } from './check.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([CheckRepository]),
    AuthModule,
  ],
  controllers: [ChecksController],
  providers: [ChecksService]
})
export class ChecksModule {}
