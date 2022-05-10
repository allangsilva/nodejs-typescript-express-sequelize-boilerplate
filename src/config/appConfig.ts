/* istanbul ignore file */
import dotenv from "dotenv";
import { Dialect } from "sequelize/types";
dotenv.config();

export default {
  cors: {
    whiteList: process.env.CORS_WHITELIST?.split(",") ?? "*",
  },
  logger: {
    enabled: process.env.LOGGER_ENABLED === "true",
    level: process.env.LOGGER_LEVEL || "info",
  },
  databases: {
    default: {
      dialect: "mysql" as Dialect,
      timezone: process.env.TZ || "-03:00",
      host: process.env.DB_HOST || "localhost",
      username: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "root",
      database: process.env.DB_DATABASE || "db_name",
      port: Number(process.env.DB_PORT ?? 3306),
      logging: false,
      define: {
        timestamps: true,
        underscoded: true,
        underscodedAll: true,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
      },
    },
    test: {
      database: "some_db",
      dialect: "sqlite",
      username: "root",
      password: "",
      storage: ":memory:",
      logging: false,
      define: {
        timestamps: true,
        underscoded: true,
        underscodedAll: true,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
      },
    },
  },
};
