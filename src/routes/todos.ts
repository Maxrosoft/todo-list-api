import { Router } from "express";
import TodoController from "../controllers/todosController";
import authenticateToken from "../middlewares/authenticateToken";

const todosRouter: Router = Router();
const controller: TodoController = new TodoController();

todosRouter.get("/", authenticateToken, controller.list);
todosRouter.post("/", authenticateToken, controller.create);
todosRouter.put("/:id", authenticateToken, controller.update);
todosRouter.delete("/:id", authenticateToken, controller.delete);

export default todosRouter;
