import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyBoards = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/note.svg" height={110} width={110} alt="Empty boards" />
      <h2 className="mt-6 text-2xl font-semibold">Create your first board!</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Start by creating a board for your organization.
      </p>
      <div className="mt-6">
        <Button size="lg">Create Board</Button>
      </div>
    </div>
  );
};
