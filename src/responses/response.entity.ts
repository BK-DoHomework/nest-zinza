import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Response extends BaseEntity{
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  response_content:string;

  @Column()
  create_at: string;

  @Column()
  response_reasons:string;

  @Column()
  confirm_at:string;

  @Column()
  email: string;

}