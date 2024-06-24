import { Category } from "@/lib/model";


export async function GET(req) {
    try {
      const category = await Category.find().lean();
      return new Response(JSON.stringify({ success: true, data: category }), { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500 });
    }
  }

export async function POST(req) {
  try {
    
    const body = await req.json();
    const { title, img } = body;

    if (!title || !img) {
      return new Response(JSON.stringify({ success: false, message: 'Missing required fields' }), { status: 400 });
    }

    const category = await Category.create({ title: title, img: img });
    return new Response(JSON.stringify({ success: true, data: category }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500 });
  }
}