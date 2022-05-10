import { beforeAll, beforeEach, afterEach, describe, it, expect } from "@jest/globals";
import { SinonSandbox, createSandbox } from "sinon";

import { database } from "../setupTest";
import User from "../../modules/user/sequelize/entities/User";
import UsersRepository from "../../modules/user/sequelize/repositories/UsersRepository";
import UsersListService from "../../modules/user/services/UsersListService";

describe("Unit - User Suite Test", () => {
  let usersRepository: UsersRepository;
  let sandbox: SinonSandbox;
  beforeAll(async () => {
    await database.connection.sync();

    sandbox = createSandbox();
    usersRepository = new UsersRepository();
  });

  beforeEach(() => {
    sandbox = createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("UsersListService", () => {
    it("should return list of users", async () => {
      const usersFake = [
        {
          id: 1,
          username: "test.user",
          createdAt: new Date(),
          updatedAt: new Date(),
        } as User,
        {
          id: 2,
          username: "test.user2",
          createdAt: new Date(),
          updatedAt: new Date(),
        } as User,
      ];

      sandbox.stub(usersRepository, usersRepository.findAll.name as keyof UsersRepository).resolves(usersFake);

      const service = new UsersListService(usersRepository);
      const response = await service.execute({});

      const expected = usersFake.map((user) => ({
        id: user.id,
        username: user.username,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }));

      expect(response).toEqual(expected);
    });
  });
});
