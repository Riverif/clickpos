import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function NotFound() {
  const user = await currentUser();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-[#FFF5E4] text-[#6A9C89]">
      <h2 className="text-5xl">404 | Not Found</h2>
      {user ? (
        <Link href="dashboard" className="text-xl font-medium hover:underline">
          Return Dashboard
        </Link>
      ) : (
        <Link href="/" className="text-xl font-medium hover:underline">
          Return Home
        </Link>
      )}
    </div>
  );
}
