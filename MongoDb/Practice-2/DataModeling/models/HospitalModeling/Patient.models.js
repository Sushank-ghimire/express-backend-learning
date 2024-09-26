import mongoose from "mongoose";

const { Schema, model } = mongoose;

const patientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    diagnosedWite: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"],
    },
    addmittedIn: {
        type: Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },
    photos: {
        type: String,
    }
}, {timestamps: true});

export const Patient = model("Patient", patientSchema);