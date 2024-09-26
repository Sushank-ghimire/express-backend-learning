import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email should be unique"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    }
}, { timestamps: true });

export const User = model("User", userSchema);