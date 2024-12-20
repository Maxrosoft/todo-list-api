import { Schema, model } from "mongoose";

interface IUser {
    name: string;
    email: string;
    password: string;
}

const userSchema: Schema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export const Post = model<IUser>("Post", userSchema);

export type { IUser };