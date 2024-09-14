import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <div className="p-10 py-6">
      <Link href="products/new-products">
        <Button>Add Products</Button>
      </Link>
    </div>
  );
};

export default ProductsPage;
