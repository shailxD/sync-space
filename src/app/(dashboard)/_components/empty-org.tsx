import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export const EmptyOrg = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/elements.svg" alt="Empty" height={200} width={200} />

      <h2 className="mt-6 text-2xl font-semibold">Welcome to Board</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Create an organization to get started
      </p>

      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="max-w-fit! border-none bg-transparent p-0">
            <DialogHeader className="sr-only">
              <DialogTitle>Create Organization</DialogTitle>
            </DialogHeader>
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
