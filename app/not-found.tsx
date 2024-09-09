import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-[#FFF5E4] text-[#6A9C89]">
      <h2 className="text-5xl">404 | Not Found</h2>
      <Link href="/" className="text-xl font-medium hover:underline">
        Return Home
      </Link>
    </div>
  );
}
