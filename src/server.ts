import "dotenv/config";
import app from "./app.ts";
import mongoose from "mongoose";

const port: number = +(process.env.PORT ?? 3000);

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("database connection successfully");
        app.listen(port, (): void => {
            console.log(
                `[server]: Server is running at http://localhost:${port}`
            );
        });
    } catch (error: any) {
        console.log(`failed to connect database ${error}`);
    }
})();
