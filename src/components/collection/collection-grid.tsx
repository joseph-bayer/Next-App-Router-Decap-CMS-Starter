import { CollectionItemData } from "@/interfaces/CollectionItemData";
import Image from "next/image";
import Link from "next/link";

interface CollectionGridProps {
  collectionItemsToShow: CollectionItemData[];
}

export default function CollectionGrid({
  collectionItemsToShow,
}: CollectionGridProps) {
  return (
    <>
      {!!collectionItemsToShow.length && (
        <div className="relative z-[2] flex flex-col justify-center gap-16">
          {/* TODO: Sort by date asc/desc */}
          <div>
            <button></button>
          </div>
          <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {collectionItemsToShow.map((collectionItem, index) => {
              return (
                <Link
                  href={`/collection/${collectionItem.slug}`}
                  className="animate-fade-in fade-in-2s mx-auto max-w-[300px] transition-transform duration-300 ease-in-out hover:scale-110 md:mx-[unset]"
                  key={`${collectionItem.slug}-${index}`}
                >
                  <Image
                    src={collectionItem.heroImage.src}
                    alt={collectionItem.heroImage.alt}
                    width={300}
                    height={300}
                    className="rounded-2xl"
                    style={{
                      objectFit: "cover",
                      minHeight: "300px",
                      maxHeight: "300px",
                      minWidth: "300px",
                      maxWidth: "300px",
                    }}
                  />
                  <div
                    className={`text-2xl font-black ${index % 2 === 0 ? "text-vegeta" : "text-coffee"}`}
                  >
                    {collectionItem.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
