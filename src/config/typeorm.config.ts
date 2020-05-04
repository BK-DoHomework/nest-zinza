import { TypeOrmModuleOptions } from '@nestjs/typeorm'

//cấu hình để kết nối database
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'zinza',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};