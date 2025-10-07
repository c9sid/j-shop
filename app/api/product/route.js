import connectDB from "@/config/mongodb"
import Product from "@/models/products";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB();
        const product = await Product.find();
        return NextResponse.json({ success: true, product });
    } catch (error) {
        console.error("Error while fetching products", error)
        return NextResponse.json({ success: false, message: "Error fetching products" }, { status: 500 })
    }
}