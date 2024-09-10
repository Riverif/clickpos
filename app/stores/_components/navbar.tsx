"use client";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

export const NavBar = () => {
  const pathname = usePathname();
  const label = pathname.split("/")[1];

  return (
    <div className="flex w-full items-center justify-between md:px-10 px-4">
      <div className="flex items-center gap-x-4">
        {/* <span className="text-2xl font-extrabold tracking-widest text-[#CD5C08] md:mr-16">
          CLICKPOS
        </span> */}
        <h2 className="text-2xl font-semibold capitalize">{label}</h2>
      </div>
      <div className="flex items-center gap-x-4">
        <UserButton />
      </div>
    </div>
  );
};
