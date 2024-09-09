import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";

export const ModalSignin = () => {
  const onClick = () => {};

  return (
    <Dialog>
      <DialogTrigger>
        <div className="group relative">
          <span className="relative left-0 top-0 h-full bg-[#CD5C08] px-5 py-2.5 font-medium uppercase text-white transition-all group-hover:-left-2 group-hover:-top-1">
            LOGIN
          </span>
          <div className="absolute -top-2 left-0 -z-10 h-[39px] w-full bg-orange-800/40" />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#FFF5E4]">
        <DialogHeader>
          <DialogTitle className="text-center">Sign In</DialogTitle>
          <DialogDescription className="text-center font-medium text-black">
            Sign In with your google account.
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full justify-center">
          <Button onClick={onClick} variant="highlights">
            <span className="mr-2 flex items-center justify-center rounded-full bg-white p-1">
              <FcGoogle className="h-5 w-5" />
            </span>
            Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
