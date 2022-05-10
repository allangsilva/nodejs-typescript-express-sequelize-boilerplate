import BaseRepository from "../../../../database/BaseRepository";
import User, { IUserCreationAttributes } from "../entities/User";

class UsersRepository extends BaseRepository<User> {
  constructor() {
    super(User);
  }

  async create(userAttributes: IUserCreationAttributes) {
    return User.create(userAttributes);
  }
}

export default UsersRepository;
