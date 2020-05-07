import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "src/auth/user.entity";

@Entity()
export class Check extends BaseEntity {

  @PrimaryGeneratedColumn() // khóa chính
  id: number;

  @Column()
  timeIn: string;

  @Column()
  timeOut: string;



  @ManyToOne(type => User, user => user.checks, { eager: false })
  user: User;

  // @Column()
  // userId: number;
}