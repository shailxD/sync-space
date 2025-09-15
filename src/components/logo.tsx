"use client";

import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { SyncSpaceLogo } from "@/assets/logos";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <SyncSpaceLogo className="size-13" />
      <div className="flex items-center gap-x-1">
        <span className={cn(font.className, "text-lg font-semibold")}>
          Sync
        </span>
        <span className={cn(font.className, "text-lg font-normal")}>Space</span>
      </div>
    </div>
  );
};
