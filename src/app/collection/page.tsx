import Collection from "@/components/collection/collection";
import { GetAllCollectionItemsData } from "@/lib/getAllCollectionItemsData";

interface CollectionItemCollectionPageProps {}

export default async function CollectionItemCollectionPage({}: CollectionItemCollectionPageProps) {
  const allCollectionItemsData = await GetAllCollectionItemsData();

  return <Collection allCollectionItemsData={allCollectionItemsData} />;
}
