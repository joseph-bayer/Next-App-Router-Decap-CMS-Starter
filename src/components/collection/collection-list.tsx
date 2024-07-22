import { CollectionItemData } from "@/interfaces/CollectionItemData";
import Link from "next/link";
import Image from "next/image";

interface CollectionListProps {
  collectionItemsToShow: CollectionItemData[];
}

export default function CollectionList({
  collectionItemsToShow,
}: CollectionListProps) {
  return (
    <div className="flex flex-col gap-16 justify-center z-[2] relative">
      {/* TODO: Sort by date asc/desc */}
      <div>
        <button></button>
      </div>
      <div className="flex flex-col gap-8">
        {collectionItemsToShow.map((collectionItem, index) => {
          return (
            <Link
              href={`/collection/${collectionItem.slug}`}
              className="animate-fade-in fade-in-2s mx-auto md:mx-[unset] hover:scale-[1.01] transition-all duration-300 ease-in-out flex flex-row gap-8 border-b-4 border-dragonBall w-full p-8 rounded-xl bg-offWhite/25 hover:bg-offWhite/50 max-h-[400px]"
              key={`${collectionItem.slug}-${index}`}
            >
              <Image
                src={collectionItem.heroImage.src}
                alt={collectionItem.heroImage.alt}
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
              <div className="flex flex-col gap-4">
                <div className="text-2xl font-black text-superSaiyan">
                  {collectionItem.title}
                </div>
                <div className="text-xl text-offBlack text-ellipsis line-clamp-[9] whitespace-pre-wrap break-words">
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
