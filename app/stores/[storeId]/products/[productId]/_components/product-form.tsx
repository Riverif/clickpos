"use client";

import { ProductSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Combobox } from "@/components/ui/combobox";
import { ProductCategory } from "@prisma/client";

interface ProductFormProps {
  initialData: z.infer<typeof ProductSchema>;
  storeId: string;
  categories: ProductCategory[];
}

export const ProductForm = ({
  initialData,
  storeId,
  categories,
}: ProductFormProps) => {
  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: { ...initialData, image: null },
  });

  const onSubmit = async (values: z.infer<typeof ProductSchema>) => {
    try {
      await axios.post(`/api/stores/${storeId}/products`, {
        ...values,
      });
      toast.success("Success");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-4 flex-wrap"
        >
          <div className="grid grid-cols-1 gap-y-4 flex-1">
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="drop-shadow-lg bg-white border-black p-4 rounded-xl">
                  <FormLabel className="text-lg">Categoy Product</FormLabel>
                  <FormControl>
                    <div>
                      <Combobox
                        {...field}
                        options={categories.map((category) => ({
                          label: category.name,
                          value: category.id,
                        }))}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="drop-shadow-lg bg-white border-black p-4 rounded-xl ">
                  <FormLabel className="text-lg">Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Baju MU" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="drop-shadow-lg bg-white border-black p-4 rounded-xl ">
                  <FormLabel className="text-lg">Price</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-auto w-full flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </>
  );
};
