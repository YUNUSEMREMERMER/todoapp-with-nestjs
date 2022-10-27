import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodoModule } from './todos/todo.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'postgres',
      autoLoadModels:true,
      synchronize: true,
    }),
    UsersModule,
    TodoModule,
  ],
})
export class AppModule {}
