import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";
import { InfoSkeleton } from "./info";
import { ParticipantsSkeleton } from "./participants";
import { ToolbarSkeleton } from "./toolbar";

export const CanvasLoading = () => {
  return (
    <main
      className={cn(
        "relative h-full w-full touch-none bg-neutral-100",
        "flex items-center justify-center",
      )}
    >
      <Loader className="text-muted-foreground h-6 w-6 animate-spin" />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};
