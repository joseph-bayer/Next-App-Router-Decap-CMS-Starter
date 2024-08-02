import Collection from "@/components/collection/collection";
import { GetAllCollectionItemsData } from "@/lib/getAllCollectionItemsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collection",
};

interface CollectionItemCollectionPageProps {}

export default async function CollectionItemCollectionPage({}: CollectionItemCollectionPageProps) {
  const allCollectionItemsData = await GetAllCollectionItemsData();

  return <Collection allCollectionItemsData={allCollectionItemsData} />;
}
