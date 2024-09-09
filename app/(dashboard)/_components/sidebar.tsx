import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-y-auto bg-background">
      <div className="p-2 md:p-6">
        <span className="text-2xl font-extrabold tracking-widest text-[#CD5C08]">
          CLICKPOS
        </span>
      </div>
      <div className="flex w-full flex-col">
        <SidebarRoutes />
      </div>
    </div>
  );
};
