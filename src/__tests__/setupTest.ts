import { SequelizeOptions } from "sequelize-typescript";
import appConfig from "../config/appConfig";
import DatabaseConnection from "../database/DatabaseConnection";
import DatabaseSetup from "../database/DatabaseSetup";

let database: DatabaseConnection;
(async function () {
  const { models } = new DatabaseSetup();
  database = new DatabaseConnection(appConfig.databases.test as SequelizeOptions, models);
  await database.init();

  await database.connection.sync();
})();

export { database };
