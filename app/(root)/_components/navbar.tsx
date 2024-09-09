import { NavbarRoutes } from "@/app/(root)/_components/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";

export const NavBar = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <span className="text-2xl font-extrabold tracking-widest text-[#CD5C08]">
        CLICKPOS
      </span>
      <div>
        <MobileSidebar />
        <NavbarRoutes />
      </div>
    </div>
  );
};
