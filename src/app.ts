import express, { Express } from "express";
import "dotenv/config";

const app: Express = express();
const PORT: number = +(process.env.PORT ?? 3000);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});
