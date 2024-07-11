import fs from "fs";
import matter from "gray-matter";

export async function GetBlogData(blogSlug: string) {
  // get files in the "blogs" folder
  const filesInBlogsFolder = fs.readdirSync("src/content/blogs");

  // find data for the blog
  const blogData = filesInBlogsFolder
    .map((filename) => {
      const file = fs.readFileSync(`src/content/blogs/${filename}`, "utf8");
      const matterData = matter(file);
      return matterData.data;
    })
    .find((data) => {
      return data.slug === blogSlug;
    });

  return blogData;
}
