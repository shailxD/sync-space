"use client";

import { useOthers, useSelf } from "@liveblocks/react";

import { UserAvatar } from "./user-avatar";
import { cn, connectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_OTHER_USERS = 2;

export const Participants = () => {
  const otherUsers = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = otherUsers.length > MAX_SHOWN_OTHER_USERS;

  return (
    <div
      className={cn(
        "absolute top-2 right-2 h-12",
        "rounded-md bg-white p-3 shadow-md",
        "flex items-center",
      )}
    >
      <div className="flex gap-x-2">
        {otherUsers
          .slice(0, MAX_SHOWN_OTHER_USERS)
          .map(({ connectionId, info }) => (
            <UserAvatar
              key={connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0] || "T"}
              borderColor={connectionIdToColor(connectionId)}
            />
          ))}
        {currentUser && (
          <UserAvatar
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
            borderColor={connectionIdToColor(currentUser.connectionId)}
          />
        )}
        {hasMoreUsers && (
          <UserAvatar
            name={`${otherUsers.length - MAX_SHOWN_OTHER_USERS} more`}
            fallback={`+${otherUsers.length - MAX_SHOWN_OTHER_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div
      className={cn(
        "absolute top-2 right-2 h-12",
        "rounded-md bg-white p-3 shadow-md",
        "flex items-center",
        "w-[100px]",
      )}
    />
  );
};
