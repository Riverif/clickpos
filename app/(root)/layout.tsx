import { Footer } from "@/components/footer";
import { NavBar } from "./_components/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="home" className="min-h-screen">
      <div className="fixed inset-y-0 z-50 flex h-[80px] w-full items-center bg-[#FFF5E4] px-4 md:px-32">
        <NavBar />
      </div>
      <div className="min-h-screen px-4 pt-[80px] md:px-20">{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
