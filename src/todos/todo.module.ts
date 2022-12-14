import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodoController } from './controller/todo.controller';
import Todo from './models/todo.model';
import { TodoService } from './service/todo.service';

@Module({
  imports: [SequelizeModule.forFeature([Todo])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}