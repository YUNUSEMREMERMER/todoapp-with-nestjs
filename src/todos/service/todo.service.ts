import { CreateTodoDto } from './../dto/createTodo.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Todo from '../entity/todo.entity';
import { User } from 'src/users/models/user.model';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo)
    private todoModel: typeof Todo,
  ) {}

  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoModel.create({
      title: createTodoDto.title,
      content: createTodoDto.content,
      f_done: createTodoDto.f_done,
      userId: createTodoDto.userId,
    });
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.findAll({
      include:User
    });
  }

  async findOne(id: number): Promise<Todo> {
    return this.todoModel.findOne({
      where: {
        id,
      },
      include:User
    });
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}