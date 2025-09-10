"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { OrganizationSwitcher } from "@clerk/nextjs";

import { SyncSpaceLogo } from "@/assets/logos";
import { cn } from "@/lib/utils";
import { OrgButtons } from "./org-buttons";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const OrgSidebar = () => {
  return (
    <div className="hidden w-[250px] flex-col space-y-6 pt-4 pl-5 lg:flex">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <SyncSpaceLogo className="size-14" />
          <div className="flex items-center gap-x-1">
            <span className={cn(font.className, "text-xl font-semibold")}>
              Sync
            </span>
            <span className={cn(font.className, "text-xl font-normal")}>
              Space
            </span>
          </div>
        </div>
      </Link>

      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
            organizationPreviewAvatarBox: {
              width: "32px",
              height: "32px",
            },
          },
        }}
      />

      <OrgButtons />
    </div>
  );
};
