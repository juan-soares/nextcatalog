import { getCollection } from "@/app/_data/connection";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "";

  try {
    const a = await getCollection<I>("categories");
    console.log(a.find());
    return NextResponse.json("oi");
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 500 });
  }
}
