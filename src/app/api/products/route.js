import { Product } from "@/lib/model";

export async function GET(req) {
    try {
      const product = await Product.find().lean();
      return new Response(JSON.stringify({ success: true, data: product }), { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500 });
    }
  }

export async function POST(req) {
  try {
    
    const body = await req.json();
    const {img, desc, price, category } = body;

    if (!img || !desc || !price || !category) {
      return new Response(JSON.stringify({ success: false, message: 'Missing required fields' }), { status: 400 });
    }

    const product = await Product.create({img: img, desc: desc, price: price, category: category });
    return new Response(JSON.stringify({ success: true, data: product }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500 });
  }
}