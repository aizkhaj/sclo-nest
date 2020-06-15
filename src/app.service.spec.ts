import { Test, TestingModule } from "@nestjs/testing";
import { AppService } from "./app.service";
import { getRepository } from "typeorm";
import { Auth } from "./auth/auth.entity";

const mockAuthRepository = () => ({

});

describe("AppService", () => {
  let service: AppService;
  let authRepository = getRepository(Auth);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
