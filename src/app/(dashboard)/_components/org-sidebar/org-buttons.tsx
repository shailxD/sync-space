"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LayoutDashboard, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

export const OrgButtons = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    <div className="w-full space-y-1">
      <Button
        asChild
        size="lg"
        variant={favorites ? "ghost" : "secondary"}
        className="w-full justify-start px-2 font-normal"
      >
        <Link href="/">
          <LayoutDashboard className="mr-2 size-4" />
          Team boards
        </Link>
      </Button>

      <Button
        asChild
        size="lg"
        variant={favorites ? "secondary" : "ghost"}
        className="w-full justify-start px-2 font-normal"
      >
        <Link href={{ pathname: "/", query: { favorites: true } }}>
          <Star className="mr-2 size-4" />
          Favorite boards
        </Link>
      </Button>
    </div>
  );
};
