import { Router } from "express";
import UserController from "../controllers/UserController";

const userRoutes = Router();

userRoutes.get("/", UserController.index.bind(UserController));

export default userRoutes;
