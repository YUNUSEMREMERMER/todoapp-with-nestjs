import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { User } from './models/user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(":id")
  getUser(@Param("id") id:number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete('/delete/:id')
  dedleteUser(@Param("id") id:number): Promise<any> {
    return this.usersService.remove(id);
  }
}