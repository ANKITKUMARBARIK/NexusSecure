import { Schema, model } from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "product name is required"],
            trim: true,
            index: true,
        },
        description: {
            type: String,
            required: [true, "product description is required"],
        },
        price: {
            type: Number,
            required: [true, "product price is required"],
            default: 0,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        brand: {
            type: String,
            trim: true,
            default: "",
        },
        inStock: {
            type: Boolean,
            default: true,
        },
        status: {
            type: String,
            enum: ["available", "out-of-stock", "discontinued"],
            default: "available",
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

const Product = model("Product", productSchema);

export default Product;
