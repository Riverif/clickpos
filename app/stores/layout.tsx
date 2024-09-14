import { NavBar } from "./_components/navbar";

const StoresLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed inset-y-0 z-50 flex h-[80px] w-full items-center bg-background pl-52 drop-shadow-sm">
        <NavBar />
      </div>
      <div className="">{children}</div>
    </>
  );
};

export default StoresLayout;
