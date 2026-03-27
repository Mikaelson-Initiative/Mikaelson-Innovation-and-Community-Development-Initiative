import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import BlogSection from "./blog-section";

export default async function BlogSectionWrapper() {
  let posts = [];
  try {
    posts = await client.fetch(postsQuery, {}, { next: { revalidate: 60 } });
  } catch {
    posts = [];
  }
  return <BlogSection posts={posts} />;
}