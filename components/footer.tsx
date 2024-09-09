import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";

export const Footer = () => {
  return (
    <div className="w-full bg-[#6A9C89] py-10">
      <div className="grid grid-cols-1 place-items-center gap-y-4 text-center text-[#FFF5E4] md:grid-cols-3 md:text-left">
        <div>
          <p className="text-2xl font-extrabold tracking-widest">INVANSALE</p>
          <p>{`One of Rifki's project`}</p>
        </div>
        <div className="flex gap-x-2">
          <Link href="" className="h-fit w-fit rounded-full bg-black/30 p-2">
            <PiTelegramLogo className="h-6 w-6" />
          </Link>
          <Link href="" className="h-fit w-fit rounded-full bg-black/30 p-2">
            <FaLinkedinIn className="h-6 w-6" />
          </Link>
          <Link href="" className="h-fit w-fit rounded-full bg-black/30 p-2">
            <FaInstagram className="h-6 w-6" />
          </Link>
          <Link href="" className="h-fit w-fit rounded-full bg-black/30 p-2">
            <FaWhatsapp className="h-6 w-6" />
          </Link>
        </div>
        <div>
          <p>Contact me</p>
          <p>rifkialfiann@gmail.com</p>
          <p>https://rifkialfiann.my.id</p>
        </div>
        <div className="md:col-span-3">
          <span className="text-center">© 2024 Rifki Alfian Nahar</span>
        </div>
      </div>
    </div>
  );
};
