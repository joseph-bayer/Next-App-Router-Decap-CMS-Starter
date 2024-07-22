"use client";

import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { MutableRefObject, useState } from "react";

interface CollectionSearchProps {
  onSubmit: (keywords: string) => void;
  searchInputRef: MutableRefObject<any>;
}

export default function CollectionSearch({
  onSubmit,
  searchInputRef,
}: CollectionSearchProps) {
  const [showSeeResultsLink, setShowSeeResultsLink] = useState(false);
  return (
    <div className="w-full h-full bg-shenron relative">
      {/* Search Bar */}
      <div className="cowprint-pattern w-full h-full">
        <div className="flex flex-row justify-center items-center py-48 px-12">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!(e.target as any).collectionSearch.value) {
                onSubmit("");
              } else {
                onSubmit((e.target as any).collectionSearch.value);
                setShowSeeResultsLink(true);
              }
            }}
            className="w-full max-w-3xl"
          >
            <div
              role="search"
              className="w-full flex flex-row border-8 border-shenron rounded-3xl"
            >
              <input
                ref={searchInputRef}
                aria-label="search term"
                name="collectionSearch"
                placeholder="Search collectionItems by title..."
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

      {/* See Results button */}
      {showSeeResultsLink && (
        <div className="w-full flex flex-row justify-center absolute left-0 bottom-5 animate-fade-in">
          <a
            href="#collection-grid"
            onClick={() => setShowSeeResultsLink(false)}
            className="flex flex-col items-center text-superSaiyan hover:text-vegeta"
          >
            <span className="text-3xl uppercase font-bold">See Results</span>
            <ChevronDownIcon className="animate-bob h-auto w-12 stroke-2" />
          </a>
        </div>
      )}
    </div>
  );
}
