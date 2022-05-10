import { Request, Response } from "express";
import UsersRepository from "../sequelize/repositories/UsersRepository";
import UsersListService from "../services/UsersListService";

class UserController {
  usersRepository!: UsersRepository;
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async index(request: Request, response: Response) {
    const service = new UsersListService(this.usersRepository);
    const responseService = await service.execute({ ...request.query });
    return response.json(responseService);
  }
}

export default new UserController();
