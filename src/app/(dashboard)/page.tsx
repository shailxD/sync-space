"use client";

import { useOrganization } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";

const DashboardPage = () => {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || undefined;
  const favorites = searchParams.get("favorites") || undefined;

  const query = { search, favorites };

  return (
    <div className="h-[calc(100%-80px)] flex-1 p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={query} />
      )}
    </div>
  );
};

export default DashboardPage;
