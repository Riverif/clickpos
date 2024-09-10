import { NavBar } from "./_components/navbar";

const StoresLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed inset-y-0 z-50 flex h-[80px] w-full items-center bg-background drop-shadow-md pl-52">
        <NavBar />
      </div>
      <div className="">{children}</div>
    </>
  );
};

export default StoresLayout;
