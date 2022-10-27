import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import Todo from 'src/todos/models/todo.model';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => Todo)
  todos: Todo[];
}