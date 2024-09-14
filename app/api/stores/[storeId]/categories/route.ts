import db from "@/lib/db";
import { CategorySchema } from "@/schemas";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { storeId: string } },
) {
  try {
    const user = await currentUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const store = await db.store.findFirst({
      where: { id: params.storeId },
      select: { id: true },
    });
    if (!store) return new NextResponse("Store not exist", { status: 404 });

    const body = await req.json();

    const validateData = CategorySchema.safeParse(body);
    if (!validateData.success)
      return new NextResponse("Bad request", { status: 400 });

    const { name, parentCategoryId } = validateData.data;

    const category = await db.productCategory.create({
      data: {
        name,
        parentCategoryId,
        storeId: store.id,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error("[CATEGORIES]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
