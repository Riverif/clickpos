import db from "@/lib/db";
import { StoreSchema } from "@/schemas";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const body = StoreSchema.safeParse(await req.json());
    if (!body.success) return new NextResponse("Bad request", { status: 400 });

    const { name } = body.data;

    const store = await db.store.create({
      data: {
        name,
        userId: user.id,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
