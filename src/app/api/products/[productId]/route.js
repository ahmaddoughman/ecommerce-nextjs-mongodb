import { Product } from "@/lib/model";
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    const { productId } = params;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return new NextResponse(JSON.stringify({ success: false, message: 'Product not found' }), { status: 404 });
        }
        return new NextResponse(JSON.stringify({ success: true, data: product }), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500 });
    }
}
