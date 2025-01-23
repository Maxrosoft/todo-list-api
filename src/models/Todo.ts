import { Schema } from "mongoose";
import mongoose from "mongoose";

const todoSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
