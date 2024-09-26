import mongoose from "mongoose";

const { Schema, model } = mongoose;

const subTodoSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true});

export const SubTodo = model("SubTodo", subTodoSchema);