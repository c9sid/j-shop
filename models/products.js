import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    category: String,
    tag: String,
    offer: String,
    sellingPrice: {
        type: Number,
        required: true
    },
    actualPrice: Number,
    image: {
        type: String,
        required: true
    }
},
    { timestamps: true })

const Product = mongoose.models.Product || mongoose.model("Product", productSchema)

export default Product;
