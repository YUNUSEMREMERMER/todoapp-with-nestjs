import { CreateTodoDto } from './../dto/createTodo.dto';
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TodoService } from "../service/todo.service";
import Todo from '../models/todo.model';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @Get("/getall")
  getTodos(): Promise<Todo[]> {
    return this.todoService.findAll();
  }


  @Get('/get/:id')
  getTodo(@Param("id") id:number): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Delete('/delete/:id')
  dedleteTodo(@Param("id") id:number): Promise<any> {
    return this.todoService.remove(id);
  }
}