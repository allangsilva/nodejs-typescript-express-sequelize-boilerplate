import { Express } from "express";
import * as swaggerUi from "swagger-ui-express";

import apiSchema from "../../api.schema";

import authRoutes from "../../modules/session/routes/authRoutes";
import authMiddleware from "../middlewares/auth";
import healthRoutes from "./health.routes";
import userRoutes from "../../modules/user/routes/userRoutes";

const routers = [{ "/session": authRoutes }, { "/users": userRoutes }];

const middlewares = [authMiddleware];

export function attachRouters(app: Express) {
  // public routes
  app.use("/health", healthRoutes);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(apiSchema));

  for (const routerObj of routers) {
    const [resource, router] = Object.entries(routerObj)[0];
    app.use(resource, middlewares, router);
  }
}
