"use client";

import { ProductCategory } from "@prisma/client";
import { CategoryListItem } from "./category-list-item";
import { Accordion } from "@/components/ui/accordion";

interface CategoryListProps {
  storeId: string;
  categories: ({ subcategories: ProductCategory[] } & ProductCategory)[];
}

export const CategoryList = ({ storeId, categories }: CategoryListProps) => {
  return (
    <div>
      <Accordion type="multiple" className="w-full">
        {categories.map((category) => (
          <CategoryListItem
            key={category.id}
            category={category}
            storeId={storeId}
          />
        ))}
      </Accordion>
    </div>
  );
};
