/* istanbul ignore file */
import express from "express";
import "express-async-errors";
import cors from "cors";

import config from "../config/appConfig";
import { attachRouters } from "./routes";

import errorHandler from "./middlewares/errorHandler";
import DatabaseSetup from "../database/DatabaseSetup";
const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: config.cors.whiteList }));

attachRouters(app);
app.use(errorHandler);

let database: DatabaseSetup;
(async function () {
  database = new DatabaseSetup();
  await database.start();
})();

export { database };
export default app;
