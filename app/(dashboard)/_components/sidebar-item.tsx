"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  label: string;
  href: string;
}

export const SidebarItem = ({ label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = pathname.startsWith(href);
  const onClick = () => router.push(href);
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-start border-b p-2 font-medium transition hover:bg-[#6A9C89]/40 rounded-r-full",
        isActive && "bg-[#6A9C89] text-white hover:bg-[#6A9C89] drop-shadow-md",
      )}
    >
      {label}
    </button>
  );
};
