import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import ResponseError from "../../interfaces/ResponseError";
import logger from "../../logger/logger";

export default async (error: Error, _: Request, response: Response, _n: NextFunction) => {
  if (error instanceof ResponseError) {
    return response.status(error.code).json(error.response);
  }

  logger.error(error, `ERROR - ${error.message}`);
  const { response: responseObject, code } = new ResponseError(
    "Something went wrong. Please try again later.",
    StatusCodes.INTERNAL_SERVER_ERROR
  );
  return response.status(code).json(responseObject);
};
