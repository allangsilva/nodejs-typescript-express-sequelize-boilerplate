import { ModelCtor, Sequelize, SequelizeOptions, Model } from "sequelize-typescript";
import logger from "../logger/logger";

export default class DatabaseConnection {
  connection!: Sequelize;

  constructor(private databaseConfig: SequelizeOptions, private models: ModelCtor<Model>[]) {}

  async init() {
    await this.connect();
  }

  private get typeDateCast() {
    return (field: any, next: any) => {
      if (["DATETIME", "TIMESTAMP"].includes(field.type)) {
        return new Date(field.string() + "Z");
      }
      return next();
    };
  }

  private async connect() {
    this.connection = new Sequelize({
      ...this.databaseConfig,
      dialectOptions: {
        ...this.databaseConfig.dialectOptions,
        typeCast: this.typeDateCast,
      },
    });
    this.connection.addModels(this.models);
    await this.connection.authenticate();
    logger.info(`Connected with successfully on ${this.databaseConfig.database} database...`);
  }
}
