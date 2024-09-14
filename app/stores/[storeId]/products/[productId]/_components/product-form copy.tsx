"use client";

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
import { ProductSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import chart from "@/public/assets/chart.svg";
import toast from "react-hot-toast";

import { Upload } from "@aws-sdk/lib-storage";
import { s3Client } from "@/lib/s3Client";

interface ProductFormProps {
  initialData: z.infer<typeof ProductSchema>;
  storeId: string;
}

export const ProductForm = ({ initialData, storeId }: ProductFormProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: { ...initialData, image: null },
  });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first file
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("File need to be image!");
        form.reset({ image: null });
        setPreview(null);

        return null;
      }
      setSelectedFile(file);

      const filePreview = URL.createObjectURL(file);
      setPreview(filePreview);
    }
  };

  const fileRef = form.register("image");

  const onSubmit = async (values: z.infer<typeof ProductSchema>) => {
    try {
      const imageUrl = await uploadFile(`test.png`);
      await axios.post(`/api/stores/${storeId}/products`, {
        ...values,
        imageUrl,
      });
      toast.success("Success");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const uploadFile = async (name: string): Promise<string | undefined> => {
    if (!selectedFile) return "";
    try {
      const upload = new Upload({
        client: s3Client,
        params: {
          Bucket: "percobaan",
          Key: name,
          Body: selectedFile,
          ContentType: selectedFile.type,
        },
      });

      const data = await upload.done();
      console.log("File uploaded successfully:", data);

      return `https://percobaan.nos.jkt-1.neo.id/${name}`;
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-4 flex-wrap"
        >
          <FormField
            control={form.control}
            name="image"
            render={() => (
              <FormItem className="drop-shadow-lg bg-white p-4 rounded-xl md:row-span-3 md:max-w-[303px]">
                <div className="w-full px-4 justify-center flex">
                  <div className="w-full relative aspect-square max-w-[200px] md:max-w-none">
                    <Image
                      src={preview || chart}
                      alt="imageForm"
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      className="aspect-square rounded-lg"
                    />
                  </div>
                </div>
                <div className="">
                  <FormLabel className="text-lg">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...fileRef}
                      type="file"
                      accept="image/*" // Optional: Restrict to image files
                      onChange={handleFileChange}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 gap-y-4 flex-1">
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

            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="drop-shadow-lg bg-white border-black p-4 rounded-xl ">
                  <FormLabel className="text-lg">CategoryId</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="" />
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
