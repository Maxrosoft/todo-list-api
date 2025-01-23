import express, { Express } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import authRouter from "./routes/auth";
import todosRouter from "./routes/todos";
import errorHandler from "./middlewares/errorMiddleware";

const app: Express = express();
const PORT: number = +(process.env.PORT ?? 3000);

app.use(express.json());
app.use(authRouter);
app.use("/todos", todosRouter);
app.use(errorHandler);

mongoose
    .connect("mongodb://localhost:27017/todoListDB")
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App is listening at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Error connecting DB");
    });
