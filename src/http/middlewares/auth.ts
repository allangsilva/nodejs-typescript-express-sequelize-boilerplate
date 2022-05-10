import { Request, Response, NextFunction } from "express";

export default async (request: Request, response: Response, next: NextFunction) => {
  return next();
};
