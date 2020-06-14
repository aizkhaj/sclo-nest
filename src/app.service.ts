import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from "@nestjs/common";
import { Repository } from "typeorm";
import { Auth } from "./auth/auth.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthCredentialsDto } from "./auth/dto/auth-credentials.dto";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
  ) {}

  async signup(signupData: AuthCredentialsDto): Promise<any> {
    const { login, password } = signupData;

    const authenticatedUser = new Auth();
    authenticatedUser.login = login;
    authenticatedUser.password = password;

    try {
      return await this.authRepository.save(authenticatedUser);
    } catch (error) {
      if (error.code === "23505") {
        // handle error for postgres receiving duplicate value where it should be unique
        throw new ConflictException(
          "User has submitted a login credential that already exists",
        );
      } else {
        throw new InternalServerErrorException(
          "Seems like something has gone wrong trying to Sign Up",
        );
      }
    }
  }

  async login(loginData: AuthCredentialsDto): Promise<any> {
    const { login, password } = loginData;

    const authenticatedUser = await this.authRepository.findOne({ login });

    if (authenticatedUser && authenticatedUser.password === password) {
      const { password, ...result } = authenticatedUser;
      return result;
    }

    return null;
  }
}
