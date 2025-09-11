import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        src="/empty-search.svg"
        height={140}
        width={140}
        alt="Empty search"
      />
      <h2 className="mt-6 text-2xl font-semibold">No results found</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Try searching for something else
      </p>
    </div>
  );
};
