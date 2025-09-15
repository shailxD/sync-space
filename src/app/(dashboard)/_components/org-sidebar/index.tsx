"use client";

import Link from "next/link";
import { OrganizationSwitcher } from "@clerk/nextjs";

import { OrgButtons } from "./org-buttons";
import { Logo } from "@/components/logo";

export const OrgSidebar = () => {
  return (
    <div className="hidden w-[250px] flex-col space-y-6 pt-4 pl-5 lg:flex">
      <Link href="/">
        <Logo />
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
