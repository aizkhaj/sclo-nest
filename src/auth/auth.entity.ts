import {
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";
import { IsString } from "class-validator";

@Entity()
@Unique(["login"])
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  login: string;

  @Column()
  @IsString()
  password: string;

  @CreateDateColumn()
  createdAt: Date;
}
