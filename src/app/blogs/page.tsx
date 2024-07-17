import { GetAllBlosgData } from "@/lib/getAllBlogsData";
import Link from "next/link";
import Image from "next/image";

interface BlogCollectionPageProps {}

export default async function BlogCollectionPage({}: BlogCollectionPageProps) {
  const allBlogsData = await GetAllBlosgData();

  return (
    <div className="bg-shenron p-12 h-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 justify-center">
        <h1 className="text-5xl uppercase font-bold">Blog Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogsData.map((blog) => {
            return (
              <Link
                href={`/blogs/${blog.slug}`}
                className="max-w-[300px] mx-auto md:mx-[unset]"
              >
                <Image
                  src={blog.heroImage.src}
                  alt={blog.heroImage.alt}
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
                <div className="text-2xl font-bold">{blog.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
