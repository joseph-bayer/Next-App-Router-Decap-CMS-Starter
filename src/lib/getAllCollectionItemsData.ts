import {
  CollectionItemData,
  CollectionItemMatterData,
} from "@/interfaces/CollectionItemData";
import fs from "fs";
import matter from "gray-matter";

export async function GetAllCollectionItemsData(): Promise<
  CollectionItemData[]
> {
  // get files in the "collectionItems" folder
  const filesInCollectionItemsFolder = fs.readdirSync(
    "src/content/collection-items"
  );

  // map files into object data
  const allCollectionItemsData: CollectionItemData[] =
    filesInCollectionItemsFolder
      .map((filename) => {
        const file = fs.readFileSync(
          `src/content/collection-items/${filename}`,
          "utf8"
        );
        const matterData = matter(file);
        const fileStats = fs.statSync(
          `src/content/collection-items/${filename}`
        );
        const collectionItemData: CollectionItemData = {
          ...(matterData.data as CollectionItemMatterData),
          creationTime: fileStats.birthtime,
        };
        return collectionItemData;
      })
      .sort((a, b) => {
        // Sort newest to oldest
        return Number(b.creationTime) - Number(a.creationTime);
      });

  return allCollectionItemsData;
}
