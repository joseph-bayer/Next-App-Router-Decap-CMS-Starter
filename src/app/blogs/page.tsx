import { GetAllBlosgData } from "@/lib/getAllBlogsData";
import Collection from "@/components/collection/collection";

interface BlogCollectionPageProps {}

export default async function BlogCollectionPage({}: BlogCollectionPageProps) {
  const allBlogsData = await GetAllBlosgData();

  return <Collection allBlogsData={allBlogsData} />;
}
