"use client";

import { toast } from "sonner";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "~/convex/_generated/api";
import { cn } from "@/lib/utils";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const router = useRouter();
  const { mutate: create, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    create({ orgId, title: "Untitled" })
      .then((id) => {
        toast.success("Board created");
        router.push(`/board/${id}`);
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
