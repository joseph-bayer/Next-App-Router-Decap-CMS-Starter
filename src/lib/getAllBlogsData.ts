import fs from "fs";
import matter from "gray-matter";

export async function GetAllBlosgData() {
  // get files in the "blogs" folder
  const filesInBlogsFolder = fs.readdirSync("src/content/blogs");

  // map files into object data
  const allBlogsData = filesInBlogsFolder.map((filename) => {
    // TODO: get file birthdate using fs.stat. append to matterData.data
    const file = fs.readFileSync(`src/content/blogs/${filename}`, "utf8");
    const matterData = matter(file);
    return matterData.data;
  });

  return allBlogsData;
}
