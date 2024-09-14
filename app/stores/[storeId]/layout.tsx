import db from "@/lib/db";
import { NavBar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { redirect } from "next/navigation";

const StoresLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) => {
  const store = await db.store.findFirst({
    where: { id: params.storeId },
    select: { id: true },
  });
  if (!store) return redirect("/stores");

  return (
    <>
      <div className="fixed inset-y-0 z-50 flex h-[80px] w-full items-center bg-background drop-shadow-md md:pl-52">
        <NavBar storeId={params.storeId} />
      </div>
      <div className="fixed z-50 hidden h-full w-52 items-center bg-background drop-shadow-md md:flex">
        <Sidebar storeId={params.storeId} />
      </div>
      <div className="pt-[80px] md:pl-52">{children}</div>
    </>
  );
};

export default StoresLayout;
