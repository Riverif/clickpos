import { NavBar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const StoresLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) => {
  return (
    <>
      <div className="fixed inset-y-0 z-50 flex h-[80px] w-full items-center bg-background drop-shadow-md md:pl-52">
        <NavBar storeId={params.storeId} />
      </div>
      <div className="fixed z-50 h-full items-center bg-background drop-shadow-md w-52 hidden md:flex">
        <Sidebar storeId={params.storeId} />
      </div>
      <div className="">{children}</div>
    </>
  );
};

export default StoresLayout;
