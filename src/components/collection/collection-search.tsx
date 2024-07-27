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
    <div className="relative h-full w-full bg-offWhite">
      {/* Search Bar */}
      <div className="cowprint-pattern h-full w-full">
        <div className="flex flex-row items-center justify-center px-12 py-48">
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
              className="flex w-full flex-row rounded-3xl bg-offWhite p-2"
            >
              <input
                ref={searchInputRef}
                aria-label="search term"
                name="collectionSearch"
                placeholder="Search collectionItems by title..."
                className="w-full rounded-l-2xl px-4 py-2 text-2xl placeholder:text-gray-500"
              />
              <button
                aria-label="search"
                className="group rounded-r-2xl bg-superSaiyan px-4 py-2 hover:bg-dragonBall"
              >
                <MagnifyingGlassIcon className="h-7 w-7 stroke-[3px] text-dragonBall group-hover:text-superSaiyan" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* See Results button */}
      {showSeeResultsLink && (
        <div className="animate-fade-in absolute bottom-5 left-0 flex w-full flex-row justify-center">
          <a
            href="#collection-grid"
            onClick={() => setShowSeeResultsLink(false)}
            className="flex flex-col items-center text-superSaiyan hover:text-vegeta"
          >
            <span className="text-3xl font-bold uppercase">See Results</span>
            <ChevronDownIcon className="animate-bob h-auto w-12 stroke-2" />
          </a>
        </div>
      )}
    </div>
  );
}
