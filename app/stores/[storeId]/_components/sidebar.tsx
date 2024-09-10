import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = ({ storeId }: { storeId: string }) => {
  return (
    <div className="flex h-full w-full flex-col overflow-y-auto bg-background space-y-10 items-center pt-6">
      <div>
        <span className="text-2xl font-extrabold tracking-widest text-[#CD5C08]">
          CLICKPOS
        </span>
      </div>
      <div className="flex w-full flex-col">
        <SidebarRoutes storeId={storeId} />
      </div>
    </div>
  );
};
