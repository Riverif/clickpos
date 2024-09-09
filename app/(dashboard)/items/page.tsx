import Image from "next/image";
import logistic from "@/public/assets/logistic.svg";
import { Separator } from "@/components/ui/separator";

const items = [
  { nomor: 1 },
  { nomor: 2 },
  { nomor: 3 },
  { nomor: 4 },
  { nomor: 5 },
];

const ItemsPage = () => {
  return (
    <div className="space-y-4 px-10">
      <p className="w-[180px] border border-black p-2">Search Items</p>
      <div className="flex gap-x-10 pr-4">
        <div className="w-[200px] bg-[#6A9C89] p-4 text-white">
          <h3 className="text-2xl font-semibold">Category</h3>
        </div>
        <div className="flex-1">
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {items.map((item) => (
              <div
                key={item.nomor}
                className="h-fit border border-black p-2 font-medium"
              >
                <Image src={logistic} alt="image" className="aspect-square" />
                <Separator className="my-2 bg-black" />
                <p>Baju</p>
                <p>Rp. 15.0000,00</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsPage;
