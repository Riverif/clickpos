import { useRouter } from "next/navigation";

export const ModalSignin = () => {
  const router = useRouter();

  return (
    <button className="group relative" onClick={() => router.push("/sign-in")}>
      <span className="relative left-0 top-0 h-full bg-[#CD5C08] px-5 py-2.5 font-medium uppercase text-white transition-all group-hover:-left-2 group-hover:-top-1">
        LOGIN
      </span>
      <div className="absolute -top-2 left-0 -z-10 h-[39px] w-full bg-orange-800/40" />
    </button>
  );
};
