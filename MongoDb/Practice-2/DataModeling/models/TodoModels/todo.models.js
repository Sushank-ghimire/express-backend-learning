import mongoose from "mongoose";

const { Schema, model } = mongoose;

const todoSchema = new Schema({
    content: {
        type: String,
        required: [true, "Title must be Required"],
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        // Array of SubTodos
        {
            type: Schema.Types.ObjectId,
            ref: "SubTodo",
        }
    ],
}, { timestamps: true });


export const Todo = model("Todo", todoSchema);