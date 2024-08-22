import { CollectionItemData } from "@/interfaces/CollectionItemData";
import Image from "next/image";
import Link from "next/link";

interface CollectionListProps {
  collectionItemsToShow: CollectionItemData[];
}

export default function CollectionList({
  collectionItemsToShow,
}: CollectionListProps) {
  return (
    <div className="relative z-[2] flex flex-col justify-center gap-16">
      {/* TODO: Sort by date asc/desc */}
      <div>
        <button></button>
      </div>
      <div className="flex flex-col gap-8">
        {collectionItemsToShow.map((collectionItem, index) => {
          return (
            <Link
              href={`/collection/${collectionItem.slug}`}
              className={`animate-fade-in fade-in-2s mx-auto flex max-h-[400px] w-full flex-row gap-8 rounded-t-2xl border-b-4 bg-offWhite/25 p-8 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:bg-offWhite/50 md:mx-[unset] ${index % 2 === 0 ? "border-vegeta" : "border-coffee"}`}
              key={`${collectionItem.slug}-${index}`}
            >
              <Image
                src={collectionItem.heroImage.src}
                alt={collectionItem.heroImage.alt}
                width={300}
                height={300}
                className="rounded-t-2xl"
                style={{
                  objectFit: "cover",
                  minHeight: "300px",
                  maxHeight: "300px",
                  minWidth: "300px",
                  maxWidth: "300px",
                }}
              />
              <div className="flex flex-col gap-4">
                <div
                  className={`text-2xl font-black ${index % 2 === 0 ? "text-vegeta" : "text-coffee"}`}
                >
                  {collectionItem.title}
                </div>
                <div className="line-clamp-[9] text-ellipsis whitespace-pre-wrap break-words text-xl text-offBlack">
                  {collectionItem.content}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
