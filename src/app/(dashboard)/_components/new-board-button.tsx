"use client";

import { Plus } from "lucide-react";

import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "~/convex/_generated/api";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({ orgId, title: "Untitled" })
      .then((id) => {
        toast.success("Board created");

        //TODO: Redirect to the new board
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] rounded-lg bg-blue-600 hover:bg-blue-800",
        "flex flex-col items-center justify-center py-6",
        (pending || disabled) && "cursor-not-allowed bg-blue-600 opacity-75",
      )}
    >
      <div />
      <Plus className="h-12 w-12 stroke-1 text-white" />
      <p className="text-sm font-light text-white">New board</p>
    </button>
  );
};
