import { cn } from "@/lib/utils";

export const Toolbar = () => {
  return (
    <div
      className={cn(
        "absolute top-[50%] left-2 -translate-y-[50%]",
        "flex flex-col gap-y-4",
      )}
    >
      <div
        className={cn(
          "rounded-md bg-white p-1.5 shadow-md",
          "flex flex-col items-center gap-y-1",
        )}
      >
        <div>Pencil</div>
        <div>Square</div>
        <div>Circle</div>
        <div>Ellipse</div>
      </div>
      <div
        className={cn(
          "rounded-md bg-white p-1.5 shadow-md",
          "flex flex-col items-center gap-y-1",
        )}
      >
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div
      className={cn(
        "absolute top-[50%] left-2 -translate-y-[50%]",
        "flex flex-col gap-y-4",
        "h-[360px] w-[52px] rounded-md bg-white shadow-md",
      )}
    />
  );
};
