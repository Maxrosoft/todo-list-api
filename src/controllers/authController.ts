import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import User from "../models/User";

export default class AuthController {
    async signup(req: Request, res: Response, next) {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        try {
            await newUser.save();
        } catch {
            const error = new Error("Error signing up");
            return next(error);
        }

        let token: string;
        try {
            token = jwt.sign(
                {
                    userId: newUser._id,
                    email: newUser.email,
                },
                process.env.TOKEN_SECRET as string,
                { expiresIn: "1h" }
            );
        } catch (err) {
            const error = new Error("Error signing up");
            return next(error);
        }

        res.status(201).json({
            success: true,
            data: {
                userId: newUser._id,
                email: newUser.email,
                token: token,
            },
        });
    }

    async signin(req: Request, res: Response, next) {
        let { email, password } = req.body;

        let existingUser;
        try {
            existingUser = await User.findOne({ email: email });
        } catch {
            const error = new Error("Error signing in");
            return next(error);
        }

        if (!existingUser || existingUser.password != password) {
            const error = Error("Error signing in");
            return next(error);
        }

        let token: string;

        try {
            token = jwt.sign(
                {
                    userId: existingUser._id,
                    email: existingUser.email,
                },
                process.env.TOKEN_SECRET as string,
                { expiresIn: "1h" }
            );
        } catch (err) {
            console.log(err);
            const error = new Error("Error signing in");
            return next(error);
        }

        res.status(200).json({
            success: true,
            data: {
                userId: existingUser._id,
                email: existingUser.email,
                token: token,
            },
        });
    }
}
