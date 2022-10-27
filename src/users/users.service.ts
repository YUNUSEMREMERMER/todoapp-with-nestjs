import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Todo from 'src/todos/entity/todo.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create({
      name: createUserDto.name,
      email: createUserDto.email,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll({
      include:Todo
    });
  }

  async findOne(id: number): Promise<User> {
    return await this.userModel.findOne({
      where: {
        id,
      },
      include:Todo
    });
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}