import { Router } from "express";
import AuthController from "../controllers/authController";

const authRouter: Router = Router();
const controller: AuthController = new AuthController();

authRouter.post("/register", controller.signup);
authRouter.post("/login", controller.signin);

export default authRouter;
