import { BlogData } from "@/interfaces/BlogData";
import Link from "next/link";
import Image from "next/image";

interface CollectionListProps {
  blogsToShow: BlogData[];
}

export default function CollectionList({ blogsToShow }: CollectionListProps) {
  return (
    <div
      id="collection-list"
      className="bg-vegeta p-12 h-full relative overflow-hidden"
    >
      {/* BG Overlay */}
      <div className="absolute top-[50px] right-[25%] cactus-highlight-3 bg-cover bg-top h-full w-full"></div>

      {/* Blog List */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16 justify-center z-[2] relative">
        {/* TODO: Sort by date asc/desc */}
        <div>
          <button></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
          {blogsToShow.map((blog, index) => {
            return (
              <Link
                href={`/blogs/${blog.slug}`}
                className="max-w-[300px] mx-auto md:mx-[unset] hover:scale-110 transition-transform duration-300 ease-in-out"
                key={`${blog.slug}-${index}`}
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
                <div className="text-2xl font-black text-superSaiyan">
                  {blog.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
