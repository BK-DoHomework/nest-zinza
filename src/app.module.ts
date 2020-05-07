import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {typeOrmConfig} from './config/typeorm.config'
import { ChecksModule } from './checks/checks.module';
import { RequestsModule } from './requests/requests.module';
import { ResponsesModule } from './responses/responses.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig) ,//kết nối databasw
    AuthModule,
    ChecksModule,
    RequestsModule,
    ResponsesModule
  ],//tự động đc import sau khi khởi tạo 1 forder mới (nest g module + tên)
})
export class AppModule { }
