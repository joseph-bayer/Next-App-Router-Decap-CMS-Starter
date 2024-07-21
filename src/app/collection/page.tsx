import { GetAllCollectionItemsData } from "@/lib/getAllCollectionItemsData";
import Collection from "@/components/collection/collection";

interface CollectionItemCollectionPageProps {}

export default async function CollectionItemCollectionPage({}: CollectionItemCollectionPageProps) {
  const allCollectionItemsData = await GetAllCollectionItemsData();

  return <Collection allCollectionItemsData={allCollectionItemsData} />;
}
