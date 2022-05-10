import { Router } from "express";
import StatusCodes from "http-status-codes";

const healthRoute = Router();

healthRoute.get("/", (_, response) => {
  return response.status(StatusCodes.OK).json({ status: "UP" });
});

export default healthRoute;
