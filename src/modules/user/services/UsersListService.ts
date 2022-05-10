import { FindOptions } from "sequelize";

import User from "../sequelize/entities/User";
import UsersRepository from "../sequelize/repositories/UsersRepository";

interface IRequest {
  limit?: number;
  offset?: number;
}
export default class UsersListService {
  constructor(private usersRepository: UsersRepository) {}

  async execute(filter: IRequest): Promise<User[]> {
    const conditions: FindOptions = {
      order: ["username"],
      attributes: ["id", "username", "createdAt", "updatedAt"],
      where: {},
      offset: Number(filter.offset ?? 0),
      limit: Number(filter.limit ?? 100),
    };

    return this.usersRepository.findAll(conditions);
  }
}
