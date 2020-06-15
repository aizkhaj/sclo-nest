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
  // normally, a UUID is used and there'd be an extension enabled on Postgres so that it works. For demo purposes, I'm using a number for id.
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
