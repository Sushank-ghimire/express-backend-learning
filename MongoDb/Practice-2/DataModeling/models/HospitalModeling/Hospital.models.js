import mongoose from "mongoose";

const { Schema, model } = mongoose;

const hospitalSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    addressLine: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    specializedIn: [
        { type: String, required: true}
    ],
    mainDoctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
    }
}, {timestamps: true});

export const Hospital = model("Hospital", hospitalSchema);