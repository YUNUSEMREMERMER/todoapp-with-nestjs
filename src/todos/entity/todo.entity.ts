import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/users/models/user.model';

@Table
class Todo extends Model {

  @Column
  public title: string;

  @Column
  public content: string;

  @Column
  public f_done: boolean;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

}

export default Todo;