"use client";

import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ProductCategory } from "@prisma/client";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface CategoryListItemProps {
  category: { subcategories: ProductCategory[] } & ProductCategory;
  storeId: string;
}

export const CategoryListItem = ({
  category,
  storeId,
}: CategoryListItemProps) => {
  const isDisabled = category.subcategories.length === 0;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AccordionItem
      value={category.id}
      disabled={isDisabled}
      onClick={() => setIsOpen(!isOpen)}
    >
      <AccordionTrigger className="flex w-full justify-between px-4 pt-4 text-left">
        <h3 className="text-xl font-medium">{category.name}</h3>
        {!isDisabled && (
          <ChevronDown
            className={cn(
              "transition-transform duration-300",
              isOpen && "rotate-180",
            )}
          />
        )}
      </AccordionTrigger>
      <AccordionContent className="">
        <ul className="list-inside list-disc px-4 pt-4 text-lg font-medium">
          {category.subcategories.map((subCategory) => (
            <li key={subCategory.id}>{subCategory.name}</li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};
