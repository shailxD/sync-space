"use client";

import { FormEventHandler, useEffect, useState } from "react";

import { api } from "~/convex/_generated/api";
import { useRenameModal } from "@/store/use-rename-modal";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Id } from "~/convex/_generated/dataModel";

export const RenameModal = () => {
  const { mutate: update, pending } = useApiMutation(api.board.update);
  const { isOpen, onClose, initialValue } = useRenameModal();

  const [title, setTitle] = useState(initialValue.title);

  useEffect(() => {
    setTitle(initialValue.title);
  }, [initialValue.title]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    update({ id: initialValue.id as Id<"boards">, title })
      .then(() => {
        toast.success("Board renamed");
      })
      .catch(() => {
        toast.error("Failed to rename board");
      })
      .finally(() => {
        onClose();
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit board title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for this board</DialogDescription>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            disabled={pending}
            required
            maxLength={60}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Board title"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending} type="submit">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
