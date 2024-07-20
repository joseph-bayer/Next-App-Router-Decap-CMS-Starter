import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface CollectionSearchProps {
  onSubmit: (keywords: string) => void;
}

export default function CollectionSearch({ onSubmit }: CollectionSearchProps) {
  return (
    <div className="w-full h-full bg-shenron relative">
      <div className="cowprint-pattern w-full h-full">
        <div className="flex flex-row justify-center items-center py-48 px-12">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!(e.target as any).collectionSearch.value) {
                onSubmit("");
              } else {
                onSubmit((e.target as any).collectionSearch.value);
              }
            }}
            className="w-full max-w-3xl"
          >
            <div
              role="search"
              className="w-full flex flex-row border-8 border-shenron rounded-3xl"
            >
              <input
                aria-label="search term"
                name="collectionSearch"
                placeholder="Search blogs by title..."
                className="py-2 px-4 w-full rounded-l-2xl text-2xl "
              />
              <button
                aria-label="search"
                className="py-2 px-4 rounded-r-2xl bg-superSaiyan group hover:bg-dragonBall"
              >
                <MagnifyingGlassIcon className="h-7 w-7 text-dragonBall stroke-[3px] group-hover:text-superSaiyan" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
