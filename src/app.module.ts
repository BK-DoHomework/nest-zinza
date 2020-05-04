import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {typeOrmConfig} from './config/typeorm.config'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig) ,//kết nối databasw
    AuthModule
  ],//tự động đc import sau khi khởi tạo 1 forder mới (nest g module + tên)
})
export class AppModule { }
