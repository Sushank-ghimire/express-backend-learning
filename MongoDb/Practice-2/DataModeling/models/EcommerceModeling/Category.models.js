import mongoose from "mongoose";

const { Schema, model } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

export const Category = model("Category", categorySchema);