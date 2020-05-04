import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import * as bcrypt from 'bcrypt';

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
  gender: string;

  @Column()
  dob: string;

  @Column()
  avatar:string;

  @Column()
  is_active: string;

  @Column()
  created_at: string;

  @Column()
  created_by: string;

  @Column()
  leaveTime: string;

  @Column()
  position:string;
  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }

}