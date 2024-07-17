import { GetAllBlosgData } from "./getAllBlogsData";

export async function GetBlogData(blogSlug: string) {
  const allBlogsData = await GetAllBlosgData();

  const blogData = allBlogsData.find((data) => {
    return data.slug === blogSlug;
  });

  return blogData;
}
