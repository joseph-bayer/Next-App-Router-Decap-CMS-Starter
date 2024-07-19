import { BlogData, BlogMatterData } from "@/interfaces/BlogData";
import fs from "fs";
import matter from "gray-matter";

export async function GetAllBlosgData(): Promise<BlogData[]> {
  // get files in the "blogs" folder
  const filesInBlogsFolder = fs.readdirSync("src/content/blogs");

  // map files into object data
  const allBlogsData: BlogData[] = filesInBlogsFolder
    .map((filename) => {
      const file = fs.readFileSync(`src/content/blogs/${filename}`, "utf8");
      const matterData = matter(file);
      const fileStats = fs.statSync(`src/content/blogs/${filename}`);
      const blogData: BlogData = {
        ...(matterData.data as BlogMatterData),
        creationTime: fileStats.birthtime,
      };
      return blogData;
    })
    .sort((a, b) => {
      // Sort newest to oldest
      return Number(b.creationTime) - Number(a.creationTime);
    });

  return allBlogsData;
}
