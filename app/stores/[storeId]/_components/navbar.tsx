"use client";
import { usePathname, useRouter } from "next/navigation";
import { MobileSidebar } from "./mobile-sidebar";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export const NavBar = ({ storeId }: { storeId: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const label = pathname.split("/")[1];
  const isCashier = pathname.startsWith("/cashier");

  return (
    <div className="flex w-full items-center justify-between px-10">
      <div className="flex items-center gap-x-4">
        <MobileSidebar storeId={storeId} />
        <h2 className="text-2xl font-semibold capitalize">{label}</h2>
      </div>
      <div className="flex items-center gap-x-4">
        <Button
          variant="outline"
          className="rounded-none border-2 border-black hover:bg-[#CD5C08] hover:text-white"
          onClick={() =>
            isCashier ? router.push("/dashboard") : router.push("/cashier")
          }
        >
          {isCashier ? "Dashboard" : "Cashier Mode"}
        </Button>
        <UserButton />
      </div>
    </div>
  );
};
