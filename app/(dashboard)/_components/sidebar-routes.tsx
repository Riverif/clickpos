import { SidebarItem } from "./sidebar-item";

const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Items",
    href: "/items",
  },
  {
    label: "Sales",
    href: "/sales",
  },
  {
    label: "Sales Analytics",
    href: "/sales-analytics",
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex w-full flex-col">
      {routes.map((route) => (
        <SidebarItem key={route.href} label={route.label} href={route.href} />
      ))}
    </div>
  );
};
