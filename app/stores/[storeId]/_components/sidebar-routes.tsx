import { SidebarItem } from "./sidebar-item";

export const SidebarRoutes = ({ storeId }: { storeId: string }) => {
  const routes = [
    {
      label: "Dashboard",
      href: `/stores/${storeId}/dashboard`,
    },
    {
      label: "Products",
      href: `/stores/${storeId}/products`,
    },
    {
      label: "Sales",
      href: `/stores/${storeId}/Sales`,
    },
    {
      label: "Sales Analytics",
      href: `/stores/${storeId}/sales-analytics`,
    },
  ];

  return (
    <div className="flex w-full flex-col">
      {routes.map((route) => (
        <SidebarItem key={route.href} label={route.label} href={route.href} />
      ))}
    </div>
  );
};
