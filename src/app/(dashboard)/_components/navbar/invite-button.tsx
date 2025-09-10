import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="mr-2 size-4" />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-fit! border-none bg-transparent p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Invite a member</DialogTitle>
        </DialogHeader>
        <OrganizationProfile routing="hash" />
      </DialogContent>
    </Dialog>
  );
};
