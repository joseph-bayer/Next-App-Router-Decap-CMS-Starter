"use client";

import { CollectionItemData } from "../../interfaces/CollectionItemData";
import CollectionGrid from "./collection-grid";
import CollectionPager from "./collection-pager";
import CollectionSearch from "./collection-search";
import { useEffect, useRef, useState } from "react";

interface CollectionProps {
  allCollectionItemsData: CollectionItemData[];
}

export default function Collection({
  allCollectionItemsData,
}: CollectionProps) {
  const [searchKeywords, setSearchKeywords] = useState("");
  const [filteredCollectionItemsData, setFilteredcollectionItemsData] =
    useState<CollectionItemData[]>([]);
  const [page, setPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState<number>();

  const searchInputRef = useRef(null);

  const itemsPerPage = 12;

  // Initialize
  useEffect(() => {
    updateFilteredCollectionItemsData();

    const newNumberOfPages = Math.ceil(
      allCollectionItemsData.length / itemsPerPage
    );
    setNumberOfPages(newNumberOfPages);
  }, [allCollectionItemsData]);

  // Handle Search & Page Change
  useEffect(() => {
    updateFilteredCollectionItemsData();
  }, [searchKeywords, page]);

  const updateFilteredCollectionItemsData = () => {
    // Apply keyword filter
    let newFilteredCollectionItemsData = [...allCollectionItemsData];
    if (!!searchKeywords.length) {
      newFilteredCollectionItemsData = newFilteredCollectionItemsData.filter(
        (collectionItemData) => {
          return collectionItemData.title
            .toLowerCase()
            .includes(searchKeywords.toLowerCase());
        }
      );
    }

    // Get 1 page of items and set it to filteredCollectionItemsData
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    newFilteredCollectionItemsData = newFilteredCollectionItemsData.slice(
      start,
      end
    );
    setFilteredcollectionItemsData(newFilteredCollectionItemsData);
  };

  return (
    <div className="relative">
      <CollectionSearch
        onSubmit={(keywords) => setSearchKeywords(keywords)}
        searchInputRef={searchInputRef}
      />

      <CollectionGrid
        collectionItemsToShow={filteredCollectionItemsData}
        keywords={searchKeywords}
        searchInputRef={searchInputRef}
      />

      {!!numberOfPages && (
        <CollectionPager
          numberOfPages={numberOfPages}
          onPageChange={(newPage) => setPage(newPage)}
        />
      )}
    </div>
  );
}
