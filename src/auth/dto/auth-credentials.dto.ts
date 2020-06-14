import { IsString } from "class-validator";

export class AuthCredentialsDto {
  @IsString() readonly login: string;
  @IsString() readonly password: string;
}
