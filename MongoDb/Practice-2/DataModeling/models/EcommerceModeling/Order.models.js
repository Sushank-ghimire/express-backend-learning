import mongoose from "mongoose";

const { Schema, model } = mongoose;

const orderItemSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true,
    }
});

const orderSchema = new Schema({
    orderPrice: {
        required: true,
        type: Number,
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    orderItems: {
        type: [orderItemSchema],
        required: true,
    },
    address: {
        type: String,
        required: [true, "Address is required for Delivery!"],
    },
    status: {
        type: String,
        enum: ["Pending", "Canceled", "Delivered"],
        default: "Pending",
    }
}, { timestamps: true });


export const Order = model("Order", orderSchema);