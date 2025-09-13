"use client";

import Image from "next/image";
import { useMutation } from "convex/react";
import { useOrganization } from "@clerk/nextjs";

import { api } from "~/convex/_generated/api";
import { Button } from "@/components/ui/button";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const create = useMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    create({
      orgId: organization.id,
      title: "Untitled",
    });
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/note.svg" height={110} width={110} alt="Empty boards" />
      <h2 className="mt-6 text-2xl font-semibold">Create your first board!</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Start by creating a board for your organization.
      </p>
      <div className="mt-6">
        <Button onClick={onClick} size="lg">
          Create Board
        </Button>
      </div>
    </div>
  );
};
