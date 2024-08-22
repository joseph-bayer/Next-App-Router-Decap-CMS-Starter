import { CollectionItemData } from "@/interfaces/CollectionItemData";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { MutableRefObject } from "react";
import CollectionDisplayTabs from "./collection-display-tabs";
import CollectionGrid from "./collection-grid";
import CollectionList from "./collection-list";

interface CollectionDisplayProps {
  collectionItemsToShow: CollectionItemData[];
  keywords: string;
  searchInputRef: MutableRefObject<any>;
}

export default function CollectionDisplay({
  collectionItemsToShow,
  keywords,
  searchInputRef,
}: CollectionDisplayProps) {
  return (
    <div
      id="collection-grid"
      className="relative h-full min-h-[50vh] overflow-hidden bg-shenron p-12"
    >
      {/* BG Overlay */}
      <div className="cactus-highlight-3 absolute right-[25%] top-[50px] h-full w-full bg-cover bg-top"></div>

      {/* No Results */}
      {!collectionItemsToShow.length && (
        <button
          className="animate-fade-in text-bold relative z-[2] mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 rounded-2xl bg-offWhite/25 p-16 text-2xl text-superSaiyan transition-colors duration-200 ease-in-out hover:bg-offWhite/50 hover:text-vegeta"
          onClick={() => searchInputRef?.current?.select()}
        >
          <MagnifyingGlassIcon className="h-16 w-16 stroke-2" />
          <span>
            <span className="mb-1 block">
              No Results for "<span className="font-bold">{keywords}</span>".
            </span>
            <span className="block">
              Try searching using different keywords.
            </span>
          </span>
        </button>
      )}

      {!!collectionItemsToShow.length && (
        <CollectionDisplayTabs
          tabTitles={["Grid", "List"]}
          tabPanelComponents={[
            <CollectionGrid collectionItemsToShow={collectionItemsToShow} />,
            <CollectionList collectionItemsToShow={collectionItemsToShow} />,
          ]}
        />
      )}
    </div>
  );
}
