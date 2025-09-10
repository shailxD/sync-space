"use client";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; // TODO: Change to API call

  if (!data?.length && query.search) {
    return <div>Try searching for something else</div>;
  }

  if (!data?.length && query.favorites) {
    return <div>No favorites</div>;
  }

  if (!data?.length) {
    return <div>No boards at all</div>;
  }

  return (
    <div>
      <h2>Board List</h2>
      <p>Organization ID: {orgId}</p>
      <p>Search Query: {query.search}</p>
      <p>Favorites: {query.favorites}</p>
    </div>
  );
};
