"use client";
import Link from "next/link";
import { ModalSignin } from "./modal-signin";

export const NavbarRoutes = () => {
  return (
    <div>
      <div className="hidden items-center gap-x-4 md:flex">
        <Link
          href="#home"
          className="relative bg-transparent px-4 py-1 text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom before:scale-y-0 before:bg-[#CD5C08] before:transition-transform before:duration-200 before:content-[''] hover:text-white before:hover:scale-y-100"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="relative bg-transparent px-4 py-1 text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom before:scale-y-0 before:bg-[#CD5C08] before:transition-transform before:duration-200 before:content-[''] hover:text-white before:hover:scale-y-100"
        >
          About
        </Link>
        <Link
          href="/stores"
          className="relative bg-transparent px-4 py-1 text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom before:scale-y-0 before:bg-[#CD5C08] before:transition-transform before:duration-200 before:content-[''] hover:text-white before:hover:scale-y-100"
        >
          Stores
        </Link>
        <ModalSignin />
      </div>
    </div>
  );
};
