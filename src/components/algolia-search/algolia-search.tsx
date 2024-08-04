"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import "instantsearch.css/themes/satellite.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import FullPageLoadingIndicator from "../full-page-loading-indicator/full-page-loading-indicator";
import LoadingSpinner from "../loading-spinner/loading-spinner";
const CommandPaletteContainer = dynamic(
  () => import("../command-palette-container/command-palette-container"),
  {
    loading: () => <FullPageLoadingIndicator />,
  },
);
const AlgoliaSearchInput = dynamic(() => import("./algolia-search-input"), {
  loading: () => (
    <div className="flex w-full flex-row justify-center">
      <LoadingSpinner height={"180px"} width={"180px"} fill={"#702911"} />
    </div>
  ),
});

interface AlgoliaSearchProps {
  useMobileColors?: boolean;
}

export default function AlgoliaSearch({ useMobileColors }: AlgoliaSearchProps) {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <>
      {!!process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID?.length &&
        !!process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY?.length && (
          <>
            {/* Open Search Command Palette */}
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="group"
            >
              <MagnifyingGlassIcon
                className={`h-7 w-7 ${useMobileColors ? "stroke-white stroke-[3px] group-hover:stroke-superSaiyan" : "stroke-vegeta stroke-[3px] group-hover:stroke-dragonBall"}`}
              />
              <span className="sr-only">Open Search Menu</span>
            </button>

            {/* Search Command Palette */}
            {isSearchModalOpen && (
              <CommandPaletteContainer
                isOpen={isSearchModalOpen}
                setIsOpen={(newVal) => setIsSearchModalOpen(newVal)}
              >
                <AlgoliaSearchInput />
              </CommandPaletteContainer>
            )}
          </>
        )}
    </>
  );
}
