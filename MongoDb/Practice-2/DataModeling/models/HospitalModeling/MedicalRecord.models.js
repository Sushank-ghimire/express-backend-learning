import mongoose from "mongoose";

const { Schema, model } = mongoose;

const medicalRecordSchema = new Schema({
    patientName: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
        required: true,
    },
    hospitalName: {
        type: Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },
    checkedBy: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },
    isSerious: {
        type: Boolean,
        required: true,
    }
}, {timestamps: true});

export const MedicalRecord = model("MedicalRecord", medicalRecordSchema);