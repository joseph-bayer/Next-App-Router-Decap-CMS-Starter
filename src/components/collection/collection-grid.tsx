import { CollectionItemData } from "@/interfaces/CollectionItemData";
import Link from "next/link";
import Image from "next/image";

interface CollectionGridProps {
  collectionItemsToShow: CollectionItemData[];
}

export default function CollectionGrid({
  collectionItemsToShow,
}: CollectionGridProps) {
  return (
    <>
      {!!collectionItemsToShow.length && (
        <div className="flex flex-col gap-16 justify-center z-[2] relative">
          {/* TODO: Sort by date asc/desc */}
          <div>
            <button></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
            {collectionItemsToShow.map((collectionItem, index) => {
              return (
                <Link
                  href={`/collection/${collectionItem.slug}`}
                  className="animate-fade-in fade-in-2s max-w-[300px] mx-auto md:mx-[unset] hover:scale-110 transition-transform duration-300 ease-in-out"
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
                  <div className="text-2xl font-black text-superSaiyan">
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
