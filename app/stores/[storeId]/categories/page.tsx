import db from "@/lib/db";
import { CategoryForm } from "./_components/category-form";
import { CategoryList } from "./_components/category-list";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await db.productCategory.findMany({
    where: {
      parentCategory: null,
    },
    include: {
      subcategories: true,
    },
  });

  return (
    <div className="space-y-4 px-6 py-4">
      <div className="rounded-lg bg-white p-4 drop-shadow-lg">
        <CategoryForm storeId={params.storeId} categories={categories} />
      </div>
      <div className="space-y-4 rounded-lg bg-white p-4 drop-shadow-lg">
        <h2 className="text-2xl font-semibold">Category List</h2>
        <CategoryList storeId={params.storeId} categories={categories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
