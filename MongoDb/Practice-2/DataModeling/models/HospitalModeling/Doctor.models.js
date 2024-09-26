import mongoose from "mongoose";

const { Schema, model } = mongoose;

const workingHours = new Schema({
    hours: {
        required: true,
        type: Number,
        default: 12
    }
});

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    qualifications: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
        default: 1,
    },
    worksInHospitals: [
        {
            type: Schema.Types.ObjectId,
            ref: "Hospital",
            required: true,
        },
        workingHours
    ],
    
}, {timestamps: true});

export const Doctor = model("Doctor", doctorSchema);