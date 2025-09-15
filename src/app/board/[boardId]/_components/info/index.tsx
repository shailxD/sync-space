"use client";

import Link from "next/link";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { api } from "~/convex/_generated/api";
import { Id } from "~/convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import { Action } from "@/components/action";
import { useRenameModal } from "@/store/use-rename-modal";
import { Logo } from "@/components/logo";

interface InfoProps {
  boardId: string;
}

const TabSeparator = () => {
  return <div className="px-1.5 text-neutral-300">|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div
      className={cn(
        "absolute top-2 left-2",
        "h-12 rounded-md bg-white px-1.5 shadow-md",
        "flex items-center",
      )}
    >
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-2">
          <Link href="/">
            <Logo />
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button
          variant="board"
          className="px-2 text-base font-normal"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>
      <TabSeparator />
      <Action id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Action>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div
      className={cn(
        "absolute top-2 left-2",
        "h-12 rounded-md bg-white px-1.5 shadow-md",
        "flex items-center",
        "w-[300px]",
      )}
    />
  );
};
