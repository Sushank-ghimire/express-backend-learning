import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema({
    description: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    productImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    stock: {
        type: Number,
        required: true,
        default: 1,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    ownedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }

}, {timestamps: true});


export const Product = model("Product", productSchema);
