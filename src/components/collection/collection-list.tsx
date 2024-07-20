"use client";

import { BlogData } from "@/interfaces/BlogData";
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MutableRefObject } from "react";

interface CollectionListProps {
  blogsToShow: BlogData[];
  keywords: string;
  searchInputRef: MutableRefObject<any>;
}

export default function CollectionList({
  blogsToShow,
  keywords,
  searchInputRef,
}: CollectionListProps) {
  return (
    <div
      id="collection-list"
      className="bg-vegeta p-12 h-full relative overflow-hidden min-h-[50vh]"
    >
      {/* BG Overlay */}
      <div className="absolute top-[50px] right-[25%] cactus-highlight-3 bg-cover bg-top h-full w-full"></div>

      {/* No Results */}
      {!blogsToShow.length && (
        <button
          className="animate-fade-in text-superSaiyan hover:text-vegeta max-w-7xl mx-auto flex flex-col gap-8 justify-center items-center z-[2] relative w-full p-16 bg-offWhite/25 rounded-2xl text-2xl text-bold transition-colors duration-200 ease-in-out hover:bg-offWhite/50"
          onClick={() => searchInputRef?.current?.select()}
        >
          <MagnifyingGlassIcon className="h-16 w-16 stroke-2" />
          <div>
            <span className="block mb-1">
              No Results for "<span className="font-bold">{keywords}</span>".
            </span>
            <span className="block">
              Try searching using different keywords.
            </span>
          </div>
        </button>
      )}

      {/* Blog List */}
      {!!blogsToShow.length && (
        <div className="max-w-7xl mx-auto flex flex-col gap-16 justify-center z-[2] relative">
          {/* TODO: Sort by date asc/desc */}
          <div>
            <button></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
            {blogsToShow.map((blog, index) => {
              return (
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="animate-fade-in fade-in-2s max-w-[300px] mx-auto md:mx-[unset] hover:scale-110 transition-transform duration-300 ease-in-out"
                  key={`${blog.slug}-${index}`}
                >
                  <Image
                    src={blog.heroImage.src}
                    alt={blog.heroImage.alt}
                    width={300}
                    height={300}
                    style={{
                      objectFit: "cover",
                      minHeight: "300px",
                      maxHeight: "300px",
                      minWidth: "300px",
                      maxWidth: "300px",
                    }}
                  />
                  <div className="text-2xl font-black text-superSaiyan">
                    {blog.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
