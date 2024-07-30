import { GetAllCollectionItemsData } from "./getAllCollectionItemsData";

export async function GetCollectionItemData(collectionItemSlug: string) {
  const allCollectionItemsData = await GetAllCollectionItemsData();

  const collectionItemData = allCollectionItemsData.find((data) => {
    const slugToCheck = (data.slug as string).startsWith("/")
      ? data.slug.substring(1)
      : data.slug;
    return slugToCheck === collectionItemSlug;
  });

  return collectionItemData;
}
