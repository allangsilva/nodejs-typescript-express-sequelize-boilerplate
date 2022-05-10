import { Request, Response } from "express";

export default class SessionController {
  async auth(request: Request, response: Response) {
    return response.json({ hello: true });
  }
}
