import { SyncSpaceLogo } from "@/assets/logos";

export const Loading = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <SyncSpaceLogo className="size-24 animate-pulse duration-700" />
    </div>
  );
};
