"use client";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
export default function Page({
  open,
  id,
  setOpen,
}: {
  open: boolean;
  id: string;
  setOpen: (flag: boolean) => void;
}) {
  const router = useRouter();

  const gotoPage = (route: string) => {
    setOpen(false);
    router.push(route);
  };

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogTitle>Successfully published</DialogTitle>
        <DialogDescription>
          You can now view the article here or return to home
        </DialogDescription>
        <DialogClose asChild>
          <div className="grid grid-cols-2 gap-8">
            <Button onClick={() => gotoPage("/blog/home")}>Home</Button>
            <Button
              onClick={() => gotoPage("/blog/detail?blogId=" + id)}
              variant="secondary"
            >
              Detail
            </Button>
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
