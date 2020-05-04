import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";

@Entity()
@Unique(['username']) //xử lí các vấn đề liên quan đến trùng lặp user
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  email: string;

  @Column()
  gender: boolean;

  @Column()
  dob: Date;

  @Column()
  avatar:string;

  @Column()
  is_active: boolean;

  @Column()
  created_at: Date;

  @Column()
  created_by: string;

  @Column()
  leaveTime: number;

  @Column()
  position:string;

}