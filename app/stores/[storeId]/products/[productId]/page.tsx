import db from "@/lib/db";
import { ProductForm } from "./_components/product-form";

const ProductIdPage = async ({
  params,
}: {
  params: { productId: string; storeId: string };
}) => {
  const product = await db.product.findFirst({
    where: {
      id: params.productId,
    },
  });

  const categories = await db.productCategory.findMany();

  const initialData = {
    name: product?.name || "",
    categoryId: product?.productCategoryId || "",
    imageUrl: product?.imageUrl || "",
    price: 1,
  };

  return (
    <div className="p-10 py-6 space-y-4">
      <h2 className="font-semibold text-2xl">Added new product</h2>
      <ProductForm
        initialData={initialData}
        storeId={params.storeId}
        categories={categories}
      />
    </div>
  );
};

export default ProductIdPage;
