import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import DatabaseConnection from "./DatabaseConnection";
import appConfig from "../config/appConfig";
import User from "../modules/user/sequelize/entities/User";

class DatabaseSetup {
  models = [User];

  connection!: Sequelize;

  async start() {
    const connectionOptions: SequelizeOptions = {
      ...appConfig.databases.default,
    };

    const connection = new DatabaseConnection(connectionOptions, this.models);

    await Promise.all([connection.init()]);
    this.connection = connection.connection;
  }
}

export default DatabaseSetup;
