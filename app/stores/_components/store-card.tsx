"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Combobox } from "@/components/ui/combobox";
import { StoreSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

interface StoreCard {
  options: { label: string; value: string }[];
}

export const StoreCard = ({ options }: StoreCard) => {
  const router = useRouter();
  const [store, setStore] = useState("");
  const [toggle, setToggle] = useState(false);

  const label = toggle ? "Cancel" : "Add new store";

  const form = useForm<z.infer<typeof StoreSchema>>({
    resolver: zodResolver(StoreSchema),
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof StoreSchema>) => {
    try {
      await axios.post(`/api/stores`, values);
      toast.success("Store Created");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      form.reset({ name: "" });
      router.refresh();
    }
  };

  return (
    <Card className="border-none drop-shadow-md rounded-xl min-w-[380px]">
      <CardHeader>
        <CardTitle>Store</CardTitle>
        <CardDescription>Choose store or add one</CardDescription>
      </CardHeader>
      <CardContent>
        {toggle ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isSubmitting}
                        placeholder="store"
                        type="text"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                variant="highlights"
                className="w-full"
                disabled={!isValid || isSubmitting}
              >
                Create
              </Button>
            </form>
          </Form>
        ) : (
          <Combobox options={options} value={store} onChange={setStore} />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary" onClick={() => setToggle((curr) => !curr)}>
          {label}
        </Button>
        <Button
          onClick={() => router.push(`/stores/${store}/dashboard`)}
          disabled={store === "" || toggle}
        >
          Go to store
        </Button>
      </CardFooter>
    </Card>
  );
};
