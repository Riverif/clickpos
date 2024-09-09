import Image from "next/image";
import chart from "@/public/assets/chart.svg";

export default function Home() {
  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-y-2">
        <Image
          src={chart}
          alt="logistic"
          className="m-4 h-[360px] w-auto"
          priority
        />
        <h1 className="max-w-[700px] text-center text-3xl font-semibold text-[#6A9C89] md:text-5xl">
          Calculate your business sale and inventory stock
        </h1>
        <p className="max-w-[800px] text-center text-sm md:text-base">
          {`Our website helps businesses effortlessly manage and track inventory.
        Whether you're selling clothing, electronics, or other products, our
        platform lets you: Track Stock Levels, Calculate Sales, Manage
        Inventory. Essential for business owners, this tool ensures control over
        inventory, improves sales tracking, and supports informed decisions for
        growth.`}
        </p>
      </div>
    </div>
  );
}
