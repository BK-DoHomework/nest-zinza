import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { RequestType } from './request-types.enum';

@Entity()
export class Request extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  request_content: string;

  @Column()
  created_at: string;

  @Column()
  type: RequestType;
}