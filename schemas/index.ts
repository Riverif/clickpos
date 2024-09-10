import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(1).max(255),
  categoryId: z.string().min(1),
  imageUrl: z.string().min(1),
  storeId: z.string().min(1),
});

export const StoreCollaborate = z.object({
  userId: z.string().min(1),
});

export const StoreSchema = z.object({
  name: z.string().min(1).max(255),
});
