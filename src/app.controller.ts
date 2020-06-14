import { Controller, Post, Body, HttpCode } from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthCredentialsDto } from "./auth/dto/auth-credentials.dto";

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Post("signup")
  @HttpCode(201)
  signup(@Body() signupData: AuthCredentialsDto) {
    return this.appService.signup(signupData);
  }

  @Post("login")
  @HttpCode(200)
  login(@Body() loginData: AuthCredentialsDto) {
    return this.appService.login(loginData);
  }
}
