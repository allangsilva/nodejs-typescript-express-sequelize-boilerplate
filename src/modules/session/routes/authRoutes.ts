import { Router } from "express";
import SessionController from "../controllers/SessionController";

const sessionController = new SessionController();

const authRoutes = Router();

authRoutes.post("/auth", sessionController.auth);

export default authRoutes;
