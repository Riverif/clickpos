"use client";

import { CategorySchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
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
import { useState } from "react";
import { useRouter } from "next/navigation";

interface CategoryFormProps {
  storeId: string;
  categories: ProductCategory[];
}

export const CategoryForm = ({ storeId, categories }: CategoryFormProps) => {
  const router = useRouter();

  const [isToggle, setIsToggle] = useState(false);

  const label = isToggle ? "Cancel" : "Add new category";
  const variant = isToggle ? "destructive" : "default";

  const form = useForm<z.infer<typeof CategorySchema>>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: "",
      parentCategoryId: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CategorySchema>) => {
    try {
      await axios.post(`/api/stores/${storeId}/categories`, values);
      toast.success("Success");
      form.reset();
      router.refresh();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
        <p className="text-center text-xs md:text-left md:text-base">
          The Categories page allows users to manage product categories,
          including both parent and subcategories. Users can organize products
          into main categories and create nested subcategories for better
          structure and navigation.
        </p>
        <Button
          variant={variant}
          onClick={() => setIsToggle(!isToggle)}
          className="w-full flex-shrink-0 md:w-[150px]"
        >
          {label}
        </Button>
      </div>
      {isToggle && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 flex flex-wrap gap-4"
          >
            <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-lg">Name category *</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Sepatu, Baju, Baju Bola" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="parentCategoryId"
                render={({ field }) => {
                  const { ref, ...rest } = field;
                  ref;
                  return (
                    <FormItem>
                      <FormLabel className="text-lg">{`Parent category (optional)`}</FormLabel>
                      <FormControl>
                        <div>
                          <Combobox
                            {...rest}
                            options={categories.map((category) => ({
                              label: category.name,
                              value: category.id,
                            }))}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <div className="mt-auto flex w-full justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
