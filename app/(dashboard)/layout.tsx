import { NavBar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="fixed inset-y-0 z-50 flex h-[80px] w-full items-center bg-background lg:pl-56">
        <NavBar />
      </div>
      <div className="fixed inset-y-0 z-50 hidden h-full w-56 lg:flex">
        <Sidebar />
      </div>
      <div className="pt-[80px] lg:pl-56">{children}</div>
    </div>
  );
};

export default DashboardLayout;
