import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { StoreCard } from "./_components/store-card";

const StorePage = async () => {
  const user = await currentUser();

  if (!user) return redirect("/");

  const collaborateStore = await db.storeCollaborate.findMany({
    where: {
      userId: user.id,
    },
  });

  const stores = await db.store.findMany({
    where: {
      OR: [
        { userId: user.id },
        {
          id: {
            in: collaborateStore.map((data) => data.storeId),
          },
        },
      ],
    },
  });

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen pt-[80px] min-w-full">
        <StoreCard
          options={stores.map((store) => ({
            label: store.name,
            value: store.id,
          }))}
        />
      </div>
    </div>
  );
};

export default StorePage;
