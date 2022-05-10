import { beforeAll, beforeEach, describe, it, expect } from "@jest/globals";
import { StatusCodes } from "http-status-codes";
import supertest from "supertest";
import { randomUUID } from "crypto";

import DatabaseSetup from "../../database/DatabaseSetup";
import User from "../../modules/user/sequelize/entities/User";

import { database } from "../setupTest";

let request: supertest.SuperTest<supertest.Test>;
beforeAll(async () => {
  DatabaseSetup.prototype.start = jest.fn();

  const app = await import("../../http/app");
  request = supertest(app.default);

  await database.connection.sync();
});

describe("E2E - User Suite Test", () => {
  describe("GET /users", () => {
    beforeEach(async () => {
      await User.destroy({ where: {}, truncate: true });
    });

    it("should return list of all users", async () => {
      const user = await User.create({
        username: randomUUID(),
      });

      const response = await request.get("/users");

      expect(response.statusCode).toBe(StatusCodes.OK);

      const expected = [
        {
          id: user.id,
          username: user.username,
          createdAt: user.createdAt.toISOString(),
          updatedAt: user.updatedAt.toISOString(),
        },
      ];

      expect(response.body).toEqual(expected);
    });
  });
});
