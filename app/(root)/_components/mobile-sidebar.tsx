"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const routes = [
  {
    label: "Home",
    href: "/#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },
];

export const MobileSidebar = () => {
  const router = useRouter();
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger className="pr-4 transition hover:opacity-75 md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <div className="w-full pt-5">
          {routes.map((route) => (
            <button
              key={route.href}
              className="h-10 w-full border-b text-left"
              onClick={() => {
                router.push(route.href);
                setSheetOpen(false);
              }}
            >
              {route.label}
            </button>
          ))}
          <button className="mt-2 w-full bg-[#CD5C08] px-4 py-1 text-white transition hover:bg-[#CD5C08]/80">
            Login
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
