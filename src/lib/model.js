import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    title: {
        required: true,
        type: String
    },
    img: {
        required: true,
        type: String
    }
})

const productSchema = new Schema({
    img: {
        required: true,
        type: String
    },
    desc: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
})

export const Category = mongoose.models?.Category || mongoose.model("Category", categorySchema);
export const Product = mongoose.models?.Product || mongoose.model("Product", productSchema);

