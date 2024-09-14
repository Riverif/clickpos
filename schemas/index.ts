import { z } from "zod";

export const CategorySchema = z.object({
  name: z.string().min(1).max(255),
  parentCategoryId: z.string().optional(),
});

export const ProductSchema = z.object({
  name: z.string().min(1).max(255),
  categoryId: z.string().min(1),
  // image: z
  //   .instanceof(FileList)
  //   .nullable()
  //   .optional()
  //   .refine((file) => file?.length == 1, "File is required."),
  // image: z
  //   .unknown()
  //   .transform((value) => {
  //     return value as FileList;
  //   })
  //   .optional()
  //   .nullable(),
  image: (typeof window === "undefined" ? z.any() : z.instanceof(FileList))
    .refine((files) => {
      const fileExtension = files[0].name.split(".").pop().toLowerCase();
      return (
        fileExtension && ["jpg", "jpeg", "png", "heic"].includes(fileExtension)
      );
    }, "Only image")
    .refine((files) => {
      return files[0].size <= 4 * 1024 * 1024;
    }, "No more than 4MB")
    .optional(),

  imageUrl: z.string().optional(),

  price: z.coerce.number(),
});

export const StoreCollaborate = z.object({
  userId: z.string().min(1),
});

export const StoreSchema = z.object({
  name: z.string().min(1).max(255),
});
