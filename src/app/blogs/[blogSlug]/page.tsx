import DebugHelper from "@/components/debug-helper/debug-helper";
import { GetBlogData } from "@/lib/getBlogData";
import fs from "fs";
import matter from "gray-matter";

interface BlogPageProps {
  params: {
    blogSlug: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blogData = await GetBlogData(params.blogSlug);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      TODO: Blog Page
      <DebugHelper data={blogData} />
    </main>
  );
}

export async function generateStaticParams() {
  // Get files in the "blogs" folder
  const filesInBlogsFolder = fs.readdirSync("src/content/blogs");

  // Get the slug for each blog
  const blogSlugs = filesInBlogsFolder.map((filename) => {
    const file = fs.readFileSync(`src/content/blogs/${filename}`, "utf8");
    const matterData = matter(file);
    return matterData.data.slug;
  });

  return blogSlugs;
}
