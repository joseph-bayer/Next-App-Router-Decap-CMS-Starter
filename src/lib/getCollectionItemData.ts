import { GetAllCollectionItemsData } from "./getAllCollectionItemsData";

export async function GetCollectionItemData(collectionItemSlug: string) {
  const allCollectionItemsData = await GetAllCollectionItemsData();

  const collectionItemData = allCollectionItemsData.find((data) => {
    return data.slug === collectionItemSlug;
  });

  return collectionItemData;
}
