import { db } from "@/app/_data/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "";
  const limit = searchParams.get("limit") || null;
  const sortBy = searchParams.get("sortBy") || "recent";

  const categories = await db.collection("categories").find({});

  const docsPromises = categories.map(({ collection }) =>
    db.collection(collection).find({
      query: {
        fieldsToSearch: ["title", "translatedTitle"],
        termsToSearch: [query],
      },
    })
  );
  const docs = (await Promise.all(docsPromises)).flat();

  return NextResponse.json(docs);
}
