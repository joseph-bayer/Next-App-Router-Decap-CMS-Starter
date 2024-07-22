import { CollectionItemData } from "@/interfaces/CollectionItemData";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { MutableRefObject } from "react";
import Collection from "./collection";
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
      className="bg-vegeta p-12 h-full relative overflow-hidden min-h-[50vh]"
    >
      {/* BG Overlay */}
      <div className="absolute top-[50px] right-[25%] cactus-highlight-3 bg-cover bg-top h-full w-full"></div>

      {/* No Results */}
      {!collectionItemsToShow.length && (
        <button
          className="animate-fade-in text-superSaiyan hover:text-vegeta max-w-7xl mx-auto flex flex-col gap-8 justify-center items-center z-[2] relative w-full p-16 bg-offWhite/25 rounded-2xl text-2xl text-bold transition-colors duration-200 ease-in-out hover:bg-offWhite/50"
          onClick={() => searchInputRef?.current?.select()}
        >
          <MagnifyingGlassIcon className="h-16 w-16 stroke-2" />
          <span>
            <span className="block mb-1">
              No Results for "<span className="font-bold">{keywords}</span>".
            </span>
            <span className="block">
              Try searching using different keywords.
            </span>
          </span>
        </button>
      )}

      {!!collectionItemsToShow && (
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
