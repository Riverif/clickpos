import db from "@/lib/db";
import { ProductSchema } from "@/schemas";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
// import { z } from "zod";

// interface DataObject {
//   name: string;
//   categoryId: string;
//   price: number;
//   image?: File;
// }

export async function POST(req: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    // const formData = await req.formData();
    // const formDataToObject = (
    //   formData: FormData,
    // ): z.infer<typeof ProductSchema> => {
    //   const data: z.infer<typeof ProductSchema> = {
    //     name: "",
    //     categoryId: "",
    //     price: 0,
    //   };

    //   formData.forEach((value, key) => {
    //     if (key === "name") {
    //       data.name = value as string;
    //     } else if (key === "categoryId") {
    //       data.categoryId = value as string;
    //     } else if (key === "price") {
    //       data.price = parseFloat(value as string); // Convert to number
    //     } else if (key === "image[]") {
    //       // Assuming the file input is single and not multiple
    //       data.image = value as File;
    //     }
    //   });

    //   return data;
    // };

    const data = ProductSchema.safeParse(await req.json());
    if (!data.success) return new NextResponse("Bad Request", { status: 400 });

    const { name, imageUrl, categoryId } = data.data;

    const product = db.product.create({
      data: {
        name: name,
        imageUrl: imageUrl || "",
        productCategoryId: categoryId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("[PRODUCTS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
