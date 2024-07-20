"use client";

import { BlogData } from "@/interfaces/BlogData";
import CollectionList from "./collection-list";
import CollectionPager from "./collection-pager";
import CollectionSearch from "./collection-search";
import { useEffect, useRef, useState } from "react";

interface CollectionProps {
  allBlogsData: BlogData[];
}

export default function Collection({ allBlogsData }: CollectionProps) {
  const [searchKeywords, setSearchKeywords] = useState("");
  const [filteredBlogsData, setFilteredblogsData] = useState<BlogData[]>([]);
  const [page, setPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState<number>();

  const searchInputRef = useRef(null);

  const itemsPerPage = 12;

  // Initialize
  useEffect(() => {
    updateFilteredBlogsData();

    const newNumberOfPages = Math.ceil(allBlogsData.length / itemsPerPage);
    setNumberOfPages(newNumberOfPages);
  }, [allBlogsData]);

  // Handle Search & Page Change
  useEffect(() => {
    updateFilteredBlogsData();
  }, [searchKeywords, page]);

  const updateFilteredBlogsData = () => {
    // Apply keyword filter
    let newFilteredBlogsData = [...allBlogsData];
    if (!!searchKeywords.length) {
      newFilteredBlogsData = newFilteredBlogsData.filter((blogData) => {
        return blogData.title
          .toLowerCase()
          .includes(searchKeywords.toLowerCase());
      });
    }

    // Get 1 page of items and set it to filteredBlogsData
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    newFilteredBlogsData = newFilteredBlogsData.slice(start, end);
    setFilteredblogsData(newFilteredBlogsData);
  };

  return (
    <div className="relative">
      <CollectionSearch
        onSubmit={(keywords) => setSearchKeywords(keywords)}
        searchInputRef={searchInputRef}
      />

      <CollectionList
        blogsToShow={filteredBlogsData}
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
