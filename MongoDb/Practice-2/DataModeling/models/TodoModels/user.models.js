import mongoose from "mongoose";
// Also it can be done instead of 

const { Schema, model } = mongoose;

// const userSchema = new mongoose.Schema({});
// export const User = mongoose.model('User', userSchema);

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username must be unique"],
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "Unique email is required"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is compulsory"],
    }
}, { timestamps: true });



export const User = model('User', userSchema);

