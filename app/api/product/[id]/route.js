import connectDB from "@/config/mongodb"
import Product from "@/models/products";

export const GET = async (_req, { params }) => {
    try {
        connectDB();
        const singleProduct = Product.findOne({ slug: params.slug });

        if (!singleProduct) {
            return NextResponse.json(
                { success: false, message: "Product not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, singleProduct });
    } catch (error) {
        console.error("Error fetching product:", error);
        return NextResponse.json(
            { success: false, message: "Error fetching product" },
            { status: 500 }
        );
    }
};